import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicContent, setNewTopicContent] = useState("");
  const [showNewTopic, setShowNewTopic] = useState(false);

  const forumCategories = [
    { id: "all", name: "Все категории", count: 245, color: "bg-blue-500" },
    { id: "chairs", name: "Игровые кресла", count: 89, color: "bg-red-500" },
    {
      id: "tables",
      name: "Геймерские столы",
      count: 56,
      color: "bg-green-500",
    },
    {
      id: "accessories",
      name: "Аксессуары",
      count: 43,
      color: "bg-purple-500",
    },
    { id: "setup", name: "Сетапы", count: 34, color: "bg-yellow-500" },
    { id: "reviews", name: "Обзоры", count: 23, color: "bg-pink-500" },
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Какое кресло выбрать для долгих игровых сессий?",
      author: "GamerPro",
      avatar: "🎮",
      category: "chairs",
      replies: 23,
      views: 456,
      lastReply: "2 часа назад",
      isPinned: true,
      isHot: false,
      tags: ["DXRacer", "удобство", "здоровье"],
    },
    {
      id: 2,
      title: "Обзор нового RGB стола от HyperX",
      author: "TechReviewer",
      avatar: "⚡",
      category: "tables",
      replies: 15,
      views: 234,
      lastReply: "5 часов назад",
      isPinned: false,
      isHot: true,
      tags: ["HyperX", "RGB", "обзор"],
    },
    {
      id: 3,
      title: "Как настроить эргономику рабочего места?",
      author: "HealthyGamer",
      avatar: "🏥",
      category: "setup",
      replies: 31,
      views: 789,
      lastReply: "1 день назад",
      isPinned: false,
      isHot: false,
      tags: ["эргономика", "здоровье", "настройка"],
    },
    {
      id: 4,
      title: "Сравнение материалов: кожа vs ткань",
      author: "MaterialExpert",
      avatar: "🔬",
      category: "chairs",
      replies: 18,
      views: 345,
      lastReply: "3 часа назад",
      isPinned: false,
      isHot: false,
      tags: ["материалы", "кожа", "ткань"],
    },
    {
      id: 5,
      title: "Покажите свои игровые сетапы!",
      author: "SetupMaster",
      avatar: "🖥️",
      category: "setup",
      replies: 67,
      views: 1234,
      lastReply: "30 минут назад",
      isPinned: false,
      isHot: true,
      tags: ["сетап", "showcase", "inspiration"],
    },
    {
      id: 6,
      title: "Проблемы с подсветкой RGB - решения",
      author: "RGBFixer",
      avatar: "💡",
      category: "accessories",
      replies: 12,
      views: 189,
      lastReply: "4 часа назад",
      isPinned: false,
      isHot: false,
      tags: ["RGB", "проблемы", "решения"],
    },
  ];

  const topUsers = [
    { name: "GamerPro", posts: 234, reputation: 1250, avatar: "🎮" },
    { name: "TechReviewer", posts: 189, reputation: 980, avatar: "⚡" },
    { name: "SetupMaster", posts: 156, reputation: 890, avatar: "🖥️" },
    { name: "HealthyGamer", posts: 134, reputation: 756, avatar: "🏥" },
    { name: "MaterialExpert", posts: 123, reputation: 654, avatar: "🔬" },
  ];

  const filteredTopics = forumTopics.filter((topic) => {
    const matchesCategory =
      selectedCategory === "all" || topic.category === selectedCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateTopic = () => {
    if (newTopicTitle.trim() && newTopicContent.trim()) {
      // Здесь бы была логика создания темы
      alert(
        "Тема создана! (В реальном приложении это сохранилось бы в базе данных)",
      );
      setNewTopicTitle("");
      setNewTopicContent("");
      setShowNewTopic(false);
    }
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
                <a href="#" className="text-primary font-semibold">
                  Форум
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#"
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Forum Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold font-orbitron">
                  Форум сообщества
                </h2>
                <p className="text-muted-foreground mt-2">
                  Обсуждайте игровую мебель, делитесь опытом и получайте советы
                </p>
              </div>
              <Button
                onClick={() => setShowNewTopic(!showNewTopic)}
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Создать тему
              </Button>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск по темам и авторам..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="md:w-48">
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Категория" />
                      </SelectTrigger>
                      <SelectContent>
                        {forumCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name} ({category.count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Topic Form */}
            {showNewTopic && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Edit" className="h-5 w-5" />
                    Создать новую тему
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Заголовок темы
                    </label>
                    <Input
                      placeholder="Введите заголовок темы..."
                      value={newTopicTitle}
                      onChange={(e) => setNewTopicTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Содержание
                    </label>
                    <Textarea
                      placeholder="Опишите свой вопрос или тему для обсуждения..."
                      value={newTopicContent}
                      onChange={(e) => setNewTopicContent(e.target.value)}
                      rows={6}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Категория
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {forumCategories
                          .filter((cat) => cat.id !== "all")
                          .map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCreateTopic}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Создать тему
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowNewTopic(false)}
                    >
                      <Icon name="X" className="h-4 w-4 mr-2" />
                      Отменить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Topics List */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <Card
                  key={topic.id}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="text-lg">
                          {topic.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {topic.isPinned && (
                            <Badge variant="default" className="bg-yellow-500">
                              <Icon name="Pin" className="h-3 w-3 mr-1" />
                              Закреплено
                            </Badge>
                          )}
                          {topic.isHot && (
                            <Badge variant="destructive">
                              <Icon name="Flame" className="h-3 w-3 mr-1" />
                              Горячее
                            </Badge>
                          )}
                          <Badge variant="outline">
                            {
                              forumCategories.find(
                                (cat) => cat.id === topic.category,
                              )?.name
                            }
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                          {topic.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {topic.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="User" className="h-4 w-4" />
                            {topic.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" className="h-4 w-4" />
                            {topic.replies} ответов
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" className="h-4 w-4" />
                            {topic.views} просмотров
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" className="h-4 w-4" />
                            {topic.lastReply}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="ChevronLeft" className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Forum Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="h-5 w-5" />
                  Статистика форума
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      12,543
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Участников
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3,876</div>
                    <div className="text-sm text-muted-foreground">Тем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      45,129
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Сообщений
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">234</div>
                    <div className="text-sm text-muted-foreground">Онлайн</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Grid3x3" className="h-5 w-5" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {forumCategories
                    .filter((cat) => cat.id !== "all")
                    .map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${category.color}`}
                          ></div>
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Crown" className="h-5 w-5" />
                  Топ участников
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topUsers.map((user, index) => (
                    <div
                      key={user.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          #{index + 1}
                        </span>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{user.avatar}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {user.posts} сообщений • {user.reputation} репутация
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" className="h-5 w-5" />
                  Правила форума
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Будьте вежливы и уважительны</div>
                  <div>• Не размещайте спам и рекламу</div>
                  <div>• Используйте правильные категории</div>
                  <div>• Не дублируйте темы</div>
                  <div>• Следите за языком</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
