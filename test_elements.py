"""
Script para análise estática de funcionalidade de links, botões e formulários.
Verifica o código-fonte dos componentes React para garantir que elementos
interativos estão configurados corretamente.
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple

# Configuração
PROJECT_ROOT = Path(r"c:\Users\USER\Documents\PROJETOS-FINAIS\olliver\projeto-midas-final")
SRC_DIR = PROJECT_ROOT / "src"
WHATSAPP_NUMBER = "5534998099418"
WHATSAPP_URL = f"https://wa.me/{WHATSAPP_NUMBER}"

class TestResults:
    def __init__(self):
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        self.issues = []
    
    def add_pass(self, test_name: str):
        self.total_tests += 1
        self.passed_tests += 1
        print(f"✅ {test_name}")
    
    def add_fail(self, test_name: str, reason: str):
        self.total_tests += 1
        self.failed_tests += 1
        self.issues.append(f"{test_name}: {reason}")
        print(f"❌ {test_name}")
        print(f"   Motivo: {reason}")
    
    def print_summary(self):
        print("\n" + "="*80)
        print("RESUMO DOS TESTES")
        print("="*80)
        print(f"Total de testes: {self.total_tests}")
        print(f"✅ Passou: {self.passed_tests}")
        print(f"❌ Falhou: {self.failed_tests}")
        print(f"Taxa de sucesso: {(self.passed_tests/self.total_tests*100):.1f}%")
        
        if self.issues:
            print("\n⚠️  PROBLEMAS ENCONTRADOS:")
            for i, issue in enumerate(self.issues, 1):
                print(f"{i}. {issue}")

def read_file(file_path: Path) -> str:
    """Lê arquivo e retorna conteúdo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Erro ao ler {file_path}: {e}")
        return ""

def find_whatsapp_links(content: str) -> List[Tuple[str, int]]:
    """Encontra todos os links do WhatsApp no conteúdo"""
    # Regex para encontrar wa.me com números
    pattern = r'https://wa\.me/(\d+)'
    matches = re.finditer(pattern, content)
    return [(m.group(0), m.start()) for m in matches]

def find_internal_links(content: str) -> List[str]:
    """Encontra links internos (to="/..." ou href="/...")"""
    # Encontrar <Link to="/..." e <a href="/..."
    link_pattern = r'(?:to|href)=["\'](/[^"\']*)["\']'
    matches = re.findall(link_pattern, content)
    return list(set(matches))  # Remove duplicatas

def test_component(file_path: Path, results: TestResults):
    """Testa um componente específico"""
    content = read_file(file_path)
    if not content:
        return
    
    component_name = file_path.stem
    print(f"\n📄 Testando: {component_name}")
    print("-" * 80)
    
    # Teste 1: Verificar links do WhatsApp
    whatsapp_links = find_whatsapp_links(content)
    for link, pos in whatsapp_links:
        number = link.split('/')[-1].split('?')[0]
        if number == WHATSAPP_NUMBER:
            results.add_pass(f"{component_name}: WhatsApp link correto ({link[:50]}...)")
        else:
            results.add_fail(
                f"{component_name}: WhatsApp link com número errado",
                f"Encontrado: {number}, Esperado: {WHATSAPP_NUMBER}"
            )
    
    # Teste 2: Verificar se links externos têm target="_blank"
    external_patterns = [
        r'href=["\'](https?://[^"\']+)["\'](?![^>]*target=["\']_blank["\'])',
    ]
    
    for pattern in external_patterns:
        matches = re.finditer(pattern, content)
        for match in matches:
            url = match.group(1)
            # Verificar se o link tem rel="noreferrer" ou rel="noopener"
            link_context = content[max(0, match.start()-50):min(len(content), match.end()+100)]
            if 'target="_blank"' not in link_context and 'target=\'_blank\'' not in link_context:
                if 'mailto:' not in url and 'tel:' not in url:
                    results.add_fail(
                        f"{component_name}: Link externo sem target='_blank'",
                        f"URL: {url}"
                    )

def test_header(results: TestResults):
    """Testa o componente Header"""
    file_path = SRC_DIR / "components" / "Header.tsx"
    content = read_file(file_path)
    
    print(f"\n📄 Testando: Header.tsx")
    print("-" * 80)
    
    # Links de navegação esperados
    expected_routes = ['/', '/sobre', '/servicos', '/emergencia', '/blog', '/contato']
    
    for route in expected_routes:
        if f'href: \'{route}\'' in content or f'href: "{route}"' in content:
            results.add_pass(f"Header: Link de navegação '{route}' encontrado")
        else:
            results.add_fail(f"Header: Link de navegação '{route}' não encontrado", "Missing route")
    
    # Botões WhatsApp
    whatsapp_links = find_whatsapp_links(content)
    if len(whatsapp_links) >= 2:  # Desktop + Mobile
        results.add_pass(f"Header: Botões WhatsApp encontrados ({len(whatsapp_links)} instâncias)")
    else:
        results.add_fail("Header: Botões WhatsApp insuficientes", f"Encontrados: {len(whatsapp_links)}, Esperado: 2+")

def test_footer(results: TestResults):
    """Testa o componente Footer"""
    file_path = SRC_DIR / "components" / "Footer.tsx"
    content = read_file(file_path)
    
    print(f"\n📄 Testando: Footer.tsx")
    print("-" * 80)
    
    # Links de serviços
    service_routes = [
        '/servicos/manutencao-industrial',
        '/servicos/energia-solar',
        '/servicos/infraestrutura',
        '/servicos/preditiva',
        '/servicos/projetos'
    ]
    
    for route in service_routes:
        if f'to="{route}"' in content or f'to=\'{route}\'' in content:
            results.add_pass(f"Footer: Link de serviço '{route}' encontrado")
        else:
            results.add_fail(f"Footer: Link de serviço '{route}' não encontrado", "Missing service link")
    
    # Links de redes sociais
    social_links = ['instagram.com', 'linkedin.com', 'facebook.com']
    for social in social_links:
        if social in content.lower():
            results.add_pass(f"Footer: Link de rede social '{social}' encontrado")
        else:
            results.add_fail(f"Footer: Link de rede social '{social}' não encontrado", "Missing social link")

def test_contact_form(results: TestResults):
    """Testa o formulário de contato"""
    file_path = SRC_DIR / "components" / "ContactForm.tsx"
    content = read_file(file_path)
    
    print(f"\n📄 Testando: ContactForm.tsx")
    print("-" * 80)
    
    # Verificar se o formulário redireciona para WhatsApp
    whatsapp_links = find_whatsapp_links(content)
    if len(whatsapp_links) >= 2:  # onSubmit + fallback button
        results.add_pass(f"ContactForm: Redirecionamento WhatsApp implementado ({len(whatsapp_links)} instâncias)")
    else:
        results.add_fail("ContactForm: Redirecionamento WhatsApp não encontrado", 
                        f"Encontrados: {len(whatsapp_links)} links, Esperado: 2+")
    
    # Verificar campos obrigatórios
    required_fields = ['name', 'email', 'phone', 'service', 'message']
    for field in required_fields:
        if f'register(\'{field}\')' in content or f'register("{field}")' in content:
            results.add_pass(f"ContactForm: Campo '{field}' registrado")
        else:
            results.add_fail(f"ContactForm: Campo '{field}' não registrado", "Missing form field")
    
    # Verificar validação Zod
    if 'zodResolver' in content and 'contactFormSchema' in content:
        results.add_pass("ContactForm: Validação Zod implementada")
    else:
        results.add_fail("ContactForm: Validação Zod não encontrada", "Missing validation")

def test_pages(results: TestResults):
    """Testa páginas principais"""
    pages_to_test = ['Home.tsx', 'Blog.tsx', 'Emergencia.tsx', 'ServiceDetail.tsx']
    
    for page_name in pages_to_test:
        file_path = SRC_DIR / "pages" / page_name
        if not file_path.exists():
            continue
            
        content = read_file(file_path)
        print(f"\n📄 Testando: {page_name}")
        print("-" * 80)
        
        # Contar botões WhatsApp
        whatsapp_links = find_whatsapp_links(content)
        if whatsapp_links:
            results.add_pass(f"{page_name}: {len(whatsapp_links)} botão(ões) WhatsApp encontrado(s)")
        
        # Verificar links internos
        internal_links = find_internal_links(content)
        if internal_links:
            results.add_pass(f"{page_name}: {len(internal_links)} link(s) interno(s) encontrado(s)")

def main():
    """Função principal"""
    print("=" * 80)
    print("ANÁLISE ESTÁTICA DE FUNCIONALIDADE - PROJETO MIDAS")
    print("=" * 80)
    print(f"WhatsApp esperado: {WHATSAPP_URL}")
    print("=" * 80)
    
    results = TestResults()
    
    # Executar testes
    test_header(results)
    test_footer(results)
    test_contact_form(results)
    test_pages(results)
    
    # Resumo final
    results.print_summary()
    
    return results.failed_tests == 0

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
