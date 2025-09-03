def exibir_pergunta(pergunta, opcoes, resposta_correta):
    print("\n" + pergunta)
    for i, opcao in enumerate(opcoes, 1):
        print(f"{i}. {opcao}")
    resposta = input("Digite o número da resposta correta: ")
    
    if resposta.isdigit():
        if int(resposta) == resposta_correta:
            print("✅ Correto!")
            return 1
        else:
            print(f"❌ Errado! A resposta certa é: {opcoes[resposta_correta - 1]}")
            return 0
    else:
        print("⚠️ Entrada inválida. Nenhum ponto contabilizado.")
        return 0

def main():
    print("🎉 Bem-vindo ao Quiz de Perguntas Gerais!\n")
    pontos = 0

    perguntas = [
        {
            "pergunta": "Qual é o maior planeta do sistema solar?",
            "opcoes": ["Terra", "Marte", "Júpiter", "Saturno"],
            "resposta": 3
        },
        {
            "pergunta": "Quem escreveu 'Dom Casmurro'?",
            "opcoes": ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Clarice Lispector"],
            "resposta": 1
        },
        {
            "pergunta": "Qual país é conhecido como a terra do sol nascente?",
            "opcoes": ["China", "Japão", "Índia", "Tailândia"],
            "resposta": 2
        },
        {
            "pergunta": "Em que continente fica o Egito?",
            "opcoes": ["Ásia", "América", "África", "Europa"],
            "resposta": 3
        },
        {
            "pergunta": "Qual é o elemento químico representado pela letra 'H'?",
            "opcoes": ["Hélio", "Hidrogênio", "Háfnio", "Hólmio"],
            "resposta": 2
        },
    ]

    for p in perguntas:
        pontos += exibir_pergunta(p["pergunta"], p["opcoes"], p["resposta"])

    print(f"\n🔚 Fim do quiz! Você acertou {pontos} de {len(perguntas)} perguntas.")
    if pontos == len(perguntas):
        print("🏆 Incrível! Você acertou todas!")
    elif pontos >= 3:
        print("👍 Bom desempenho! Continue assim.")
    else:
        print("📘 Precisa estudar um pouco mais. Tente novamente!")

if __name__ == "__main__":
    main()
