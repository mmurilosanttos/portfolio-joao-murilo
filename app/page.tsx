import Image from "next/image"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg">PERFIL PESSOAL / PORTFÓLIO</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sobre
            </a>
            <a href="#trabalho" className="text-gray-600 hover:text-gray-900 transition-colors">
              Trabalho
            </a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-16" id="inicio">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Olá, sou o Murilo</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou desenvolvedor com conhecimentos em Python, JavaScript e HTML, focado em criar soluções práticas e
                funcionais para web e automações. Tenho interesse em desenvolvimento web, scripts para automação de
                tarefas e projetos que unem lógica de programação com interfaces intuitivas.
              </p>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Sergipe, Brasil</span>
              </div>

              <div className="flex items-center gap-2 text-green-600 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Disponível para novos projetos!</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/hero-image.png"
                  alt="João Murilo Santos Leite"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-16" id="sobre">
          <div className="max-w-6xl mx-auto px-4">
            <Badge variant="secondary" className="mb-8">
              Sobre mim
            </Badge>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Curioso sobre mim? Aqui está!</h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Sou uma pessoa super hiperativa, sempre em movimento e buscando novos desafios. No tempo livre,
                    adoro fazer trilhas e viagens para a natureza — é assim que recarrego as energias e clareio as
                    ideias.
                  </p>

                  <p>
                    Minha jornada na tecnologia começou em 2023, quando tomei uma das decisões mais importantes da minha
                    vida: desisti de seguir a carreira de medicina para mergulhar na programação, que sempre foi minha
                    verdadeira paixão.
                  </p>

                  <p>
                    Estou sempre estudando novas linguagens e tecnologias do futuro, buscando evoluir constantemente.
                    Sou proativo, gosto de estar em movimento, contribuir com o que sei e ir além do esperado em tudo
                    que me envolvo.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/about-image.png"
                  alt="João Murilo"
                  width={300}
                  height={350}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16" id="habilidades">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-8">
              Habilidades
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              As habilidades, ferramentas e tecnologias nas quais sou realmente bom
            </h2>

            <div className="flex justify-center gap-16 flex-wrap">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-xl flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  JS
                </div>
                <div className="font-medium">JavaScript</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  HTML
                </div>
                <div className="font-medium">HTML</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-400 text-white rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🐍
                </div>
                <div className="font-medium">Python</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white py-16" id="trabalho">
          <div className="max-w-6xl mx-auto px-4">
            <Badge variant="secondary" className="mb-8">
              Projetos
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Alguns projetos que faço parte!</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
                      PD
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Porto Digital</h3>
                      <p className="text-gray-600 text-sm">Universidade Tiradentes</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Com o Porto Digital na Unit, criamos um protótipo de média fidelidade de um aplicativo para ajudar
                    pessoas com transtornos alimentares.
                  </p>
                  <a
                    href="https://github.com/joaomurilo/porto-digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Ver Projeto →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold">
                      Unit
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Residência em Software</h3>
                      <p className="text-gray-600 text-sm">Universidade Tiradentes</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Na matéria de Residência estamos ajudando a empresa Fundação de Saúde Parreiras Horta - FSH a
                    refazer o site deles.
                  </p>
                  <a
                    href="https://github.com/paulofontes-cyber/Website-SVO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Ver Projeto →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" id="contato">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-8">
              Campo de Contato
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Algumas formas de me contatar!</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">João Murilo Santos Leite</h3>

                  <div className="space-y-4 text-left mb-8">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <a href="mailto:joaomurilosantosleite@gmail.com" className="text-blue-500 hover:underline">
                        joaomurilosantosleite@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">+55 (79) 99999-9999</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">Sergipe, Brasil</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <a href="https://github.com/joaomurilo" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <a href="https://linkedin.com/in/joaomurilo" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
                  <form id="contactForm" className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Seu nome completo"
                      />
                      <span id="nameError" className="text-red-500 text-sm hidden">
                        Nome é obrigatório
                      </span>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="seu@email.com"
                      />
                      <span id="emailError" className="text-red-500 text-sm hidden">
                        E-mail válido é obrigatório
                      </span>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Sua mensagem..."
                      ></textarea>
                      <span id="messageError" className="text-red-500 text-sm hidden">
                        Mensagem é obrigatória
                      </span>
                    </div>

                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Localização</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248369.51493936654!2d-37.2431842!3d-10.9472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3f8b0f0!2sSergipe%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização - Sergipe, Brasil"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 João Murilo Santos Leite. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
