import { Button } from "@/components/ui/button";
import { Check, MapPin, Camera, Brain, Bell } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-green-700">ГородСмарт</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">О проекте</a>
            <a href="#" className="hover:text-gray-900">Как работает</a>
            <a href="#" className="hover:text-gray-900">Функции</a>
            <a href="#" className="hover:text-gray-900">Для жителей</a>
            <a href="#" className="hover:text-gray-900">Для администрации</a>
            <a href="#" className="hover:text-gray-900">Контакты</a>
          </nav>
        </div>
        <Button className="bg-green-700 text-white hover:bg-green-800 rounded-full px-6">
          Участвовать
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-green-700 text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-white text-green-700 text-xs px-2 py-1 rounded-full mr-3 font-semibold">
            Новинка
          </span>
          Ваш город становится лучше с каждой идеей.
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Платформа для улучшения
          <br />
          <span className="text-green-600">городских пространств</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Загружайте фотографии проблемных мест в парках, дворах и улицах — ИИ проанализирует их, предложит решения и отправит отчёт в администрацию города.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-700 text-white hover:bg-green-800 rounded-full px-8 py-3">
            <Icon name="MapPin" size={16} className="mr-2" />
            Предложить улучшение
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent border-green-700 text-green-700 hover:bg-green-50">
            <Icon name="PlayCircle" size={16} className="mr-2" />
            Смотреть демо
          </Button>
        </div>
      </section>

      {/* Partners/Cities Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-6">Уже используют в городах</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-lg font-medium">Москва</div>
            <div className="text-lg font-bold border-b-2 border-green-600 pb-1">Казань</div>
            <div className="text-2xl font-bold text-green-700">ГС</div>
            <div className="text-lg font-bold">Екатеринбург</div>
            <div className="text-lg font-medium">Новосибирск</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
            <Icon name="User" size={28} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Быстро, удобно, результативно
          </h3>
          <p className="text-gray-600 mb-2">
            "Отправила фото разбитого тротуара возле школы — через две недели его отремонтировали. Наконец-то слышат жителей!"
          </p>
          <p className="text-sm text-gray-500">
            Ирина Соколова, жительница Казани
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">Категории проблем</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Охватываем все типы городских пространств
          </h2>
          <p className="text-gray-600 mb-12">
            От дорог и парков до дворов и освещения — подайте заявку по любой проблеме.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="rounded-full bg-transparent">
              🌳 Парки и скверы
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              🏘️ Дворы и детские площадки
            </Button>
            <Button className="bg-green-700 text-white rounded-full hover:bg-green-800">
              🛣️ Дороги и тротуары
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              💡 Освещение
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              🌿 Озеленение
            </Button>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ИИ анализирует фото
              <br />
              за секунды
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Автоматически определяет тип проблемы на фото</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Классифицирует объекты: скамейки, урны, дорожные знаки</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Предлагает решения на основе опыта других городов</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Формирует отчёт и отправляет в администрацию</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl h-full p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-400">10:42</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm font-medium mb-1">
                  🤖 ИИ обработал ваше фото
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  Обнаружено: разбитый асфальт, ул. Ленина, 12
                </div>
                <div className="bg-green-50 rounded-lg p-3 flex-1 border border-green-100">
                  <div className="text-sm font-bold text-green-800 mb-2">✅ Заявка создана</div>
                  <div className="text-xs text-gray-600 mb-3">
                    Категория: Дороги и тротуары<br />
                    Приоритет: Высокий<br />
                    Статус: Передано в администрацию
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">🏛️</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Администрация получила уведомление
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-80 bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                {[
                  { icon: "MapPin", color: "bg-blue-100 text-blue-600", step: "1", title: "Выберите место на карте", desc: "Укажите точное расположение проблемы" },
                  { icon: "Camera", color: "bg-purple-100 text-purple-600", step: "2", title: "Загрузите фото", desc: "Сфотографируйте проблему прямо на месте" },
                  { icon: "Brain", color: "bg-green-100 text-green-600", step: "3", title: "ИИ анализирует", desc: "Система определяет тип и предлагает решение" },
                  { icon: "Bell", color: "bg-orange-100 text-orange-600", step: "4", title: "Администрация реагирует", desc: "Получает уведомление и берёт в работу" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4 шага до
              <br />
              лучшего города
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Геолокация фиксирует точное место проблемы</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Фото загружается в облако и анализируется ИИ</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Администрация получает структурированный отчёт</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Жители следят за статусом своих заявок</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Реальный результат для города
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2 400+</div>
              <div className="text-gray-600">заявок от жителей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">78%</div>
              <div className="text-gray-600">проблем решено</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">12 дней</div>
              <div className="text-gray-600">среднее время реакции</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Сделайте свой город лучше сегодня
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Присоединяйтесь к тысячам жителей, которые уже меняют свои города к лучшему.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8 py-3 font-semibold">
              <Icon name="MapPin" size={16} className="mr-2" />
              Подать заявку
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 border-white text-white hover:bg-green-600 bg-transparent">
              <Icon name="Building2" size={16} className="mr-2" />
              Для администрации
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-green-700 mb-4 md:mb-0">ГородСмарт</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Условия использования</a>
            <a href="#" className="hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
