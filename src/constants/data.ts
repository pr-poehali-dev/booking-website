import { BookingStep, Promotion, Review } from "@/types";

export const bookingSteps: BookingStep[] = [
  {
    step: 1,
    title: "Выберите регион",
    description: "Найдите идеальное место для вашего мероприятия",
    icon: "MapPin",
  },
  {
    step: 2,
    title: "Укажите дату",
    description: "Выберите удобную дату проведения",
    icon: "Calendar",
  },
  {
    step: 3,
    title: "Забронируйте",
    description: "Подтвердите бронирование одним кликом",
    icon: "CheckCircle",
  },
];

export const promotions: Promotion[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400",
    title: "Семейные выходные",
    description: "Скидка 20% на семейные мероприятия в выходные дни",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
    title: "Корпоративные события",
    description: "Специальные условия для деловых мероприятий",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
    title: "Детские праздники",
    description: "Организация незабываемых детских торжеств",
  },
];

export const reviews: Review[] = [
  {
    name: "Анна Смирнова",
    text: "Отличный сервис! Быстро нашли идеальное место для корпоратива.",
    rating: 5,
  },
  {
    name: "Михаил Петров",
    text: "Удобная система бронирования. Рекомендую всем!",
    rating: 5,
  },
  {
    name: "Елена Васильева",
    text: "Провели детский день рождения. Все прошло на высшем уровне!",
    rating: 5,
  },
];
