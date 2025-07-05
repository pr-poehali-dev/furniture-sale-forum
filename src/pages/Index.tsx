import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [deliveryDistance, setDeliveryDistance] = useState(10);

  const furnitureItems = [
    {
      id: 1,
      name: "Игровое кресло DXRacer",
      price: 25000,
      image: "/img/9597c33e-d680-4d6e-af2b-327653726273.jpg",
      category: "chairs",
      rating: 4.8,
      reviews: 156,
      colors: ["Черный", "Красный", "Синий"],
      materials: ["Кожа", "Металл"],
      sizes: ["M", "L", "XL"],
    },
    {
      id: 2,
      name: "Геймерский стол с RGB",
      price: 18000,
      image: "/img/9597c33e-d680-4d6e-af2b-327653726273.jpg",
      category: "tables",
      rating: 4.6,
      reviews: 89,
      colors: ["Черный", "Белый"],
      materials: ["МДФ", "Металл"],
      sizes: ["120x60", "140x70", "160x80"],
    },
    {
      id: 3,
      name: "Подсветка для стола",
      price: 3500,
      image: "/img/9597c33e-d680-4d6e-af2b-327653726273.jpg",
      category: "accessories",
      rating: 4.9,
      reviews: 203,
      colors: ["RGB", "Белый", "Синий"],
      materials: ["Пластик", "Металл"],
      sizes: ["1м", "2м", "3м"],
    },
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Какое кресло выбрать для долгих игровых сессий?",
      author: "GamerPro",
      replies: 23,
      time: "2 часа назад",
    },
    {
      id: 2,
      title: "Обзор нового RGB стола",
      author: "TechReviewer",
      replies: 15,
      time: "5 часов назад",
    },
    {
      id: 3,
      title: "Как настроить эргономику рабочего места?",
      author: "HealthyGamer",
      replies: 31,
      time: "1 день назад",
    },
  ];

  const calculateDelivery = () => {
    const basePrice = 500;
    const distancePrice = deliveryDistance * 50;
    return basePrice + distancePrice;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-lg bg-background/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold font-orbitron text-primary">
                  GameFurniture
                </h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#catalog"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#delivery"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="/forum"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Форум
                </a>
                <a
                  href="#profile"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Профиль
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                Корзина (0)
              </Button>
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-primary/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ИГРОВАЯ МЕБЕЛЬ
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Создай идеальную игровую зону с нашей premium мебелью
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Icon name="Gamepad2" className="mr-2 h-5 w-5" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Присоединиться к форуму
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-orbitron mb-8 text-center">
            Каталог товаров
          </h3>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Filter" className="h-5 w-5" />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Поиск
                  </label>
                  <Input
                    placeholder="Найти товар..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Категория
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="chairs">Кресла</SelectItem>
                      <SelectItem value="tables">Столы</SelectItem>
                      <SelectItem value="accessories">Аксессуары</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={0}
                    step={1000}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Материал
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leather">Кожа</SelectItem>
                      <SelectItem value="metal">Металл</SelectItem>
                      <SelectItem value="wood">Дерево</SelectItem>
                      <SelectItem value="plastic">Пластик</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {furnitureItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                      <span className="text-sm ml-1">{item.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({item.reviews} отзывов)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.colors.map((color, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price.toLocaleString()} ₽
                    </span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Calculator */}
      <section id="delivery" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-orbitron mb-8 text-center">
            Калькулятор доставки
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Truck" className="h-5 w-5" />
                  Рассчитать стоимость доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Расстояние: {deliveryDistance} км
                  </label>
                  <Slider
                    value={[deliveryDistance]}
                    onValueChange={(value) => setDeliveryDistance(value[0])}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Услуги сборки
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Без сборки</SelectItem>
                        <SelectItem value="basic">
                          Базовая сборка (+1000 ₽)
                        </SelectItem>
                        <SelectItem value="full">
                          Полная сборка (+2500 ₽)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Время доставки
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Стандартная (бесплатно)
                        </SelectItem>
                        <SelectItem value="express">
                          Экспресс (+500 ₽)
                        </SelectItem>
                        <SelectItem value="night">Ночная (+1000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Стоимость доставки:</span>
                    <span className="text-primary">
                      {calculateDelivery().toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section id="forum" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-orbitron mb-8 text-center">
            Форум сообщества
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5" />
                    Статистика сообщества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Участников:</span>
                      <span className="font-semibold">12,543</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Тем:</span>
                      <span className="font-semibold">3,876</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сообщений:</span>
                      <span className="font-semibold">45,129</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Онлайн:</span>
                      <span className="font-semibold text-green-500">234</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-5 w-5" />
                    Популярные темы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">#игровые-кресла</Badge>
                    <Badge variant="secondary">#rgb-подсветка</Badge>
                    <Badge variant="secondary">#эргономика</Badge>
                    <Badge variant="secondary">#обзоры</Badge>
                    <Badge variant="secondary">#скидки</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Последние обсуждения</h4>
              {forumPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold hover:text-primary cursor-pointer">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="User" className="h-3 w-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" className="h-3 w-3" />
                            {post.replies} ответов
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" className="h-3 w-3" />
                            {post.time}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="ArrowRight" className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-orbitron mb-8 text-center">
            Личный кабинет
          </h3>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">Заказы</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="loyalty">Бонусы</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Мои заказы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Заказ #12345</h4>
                          <p className="text-sm text-muted-foreground">
                            Игровое кресло DXRacer
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">В пути</Badge>
                          <p className="text-sm text-muted-foreground mt-1">
                            25,000 ₽
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Заказ #12344</h4>
                          <p className="text-sm text-muted-foreground">
                            Геймерский стол с RGB
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge>Доставлен</Badge>
                          <p className="text-sm text-muted-foreground mt-1">
                            18,000 ₽
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Избранные товары</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Здесь будут отображаться ваши избранные товары
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="loyalty">
                <Card>
                  <CardHeader>
                    <CardTitle>Программа лояльности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Текущий статус:</span>
                        <Badge variant="outline">Серебряный</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Накопленные баллы:</span>
                        <span className="font-semibold">1,250</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Скидка:</span>
                        <span className="font-semibold text-primary">5%</span>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <p className="text-sm">
                          До золотого статуса осталось потратить: 5,000 ₽
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки профиля</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Имя
                          </label>
                          <Input placeholder="Ваше имя" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input placeholder="your@email.com" />
                        </div>
                      </div>
                      <Button className="w-full">Сохранить изменения</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6 text-primary" />
                <h4 className="font-bold font-orbitron text-primary">
                  GameFurniture
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшая игровая мебель для настоящих геймеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Игровые кресла</li>
                <li>Столы</li>
                <li>Аксессуары</li>
                <li>Освещение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Возврат</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Форум</li>
                <li>Discord</li>
                <li>Telegram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GameFurniture. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
