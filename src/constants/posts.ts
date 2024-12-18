import { Post } from "@/services/post-service";

export const posts: Omit<Post, "user_id">[] = [
  {
    _id: "1",
    title: "Opening Day Of Boating Season, Seattle WA",
    description:
      "Of Course The Puget Sound Is Very Watery, And Where There Is Water, There Are Boats.",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
    author: {
      id: "1",
      name: "James",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "August 18, 2022",
    category: "Sport",
  },
  {
    _id: "2",
    title: "How To Choose The Right Laptop For Programming",
    description:
      "Choosing The Right Laptop For Programming Can Be A Tough Process.",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
    author: {
      id: "2",
      name: "Louis Hoebregts",
      avatar:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    },
    createdAt: "July 25, 2022",
    category: "Technology",
  },
  {
    _id: "3",
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World's Transition To Sustainable Energy.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: {
      id: "3",
      name: "Mary",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Technology",
  },
  {
    _id: "4",
    title: "Self-Improvement Has Become An Extreme Sport",
    description:
      "What We're Told We Must Do Each Day To Develop And Be Successful Has Gone Out Of Control.",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    author: {
      id: "1",
      name: "James",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Sport",
  },
  {
    _id: "5",
    title: "Why Buying A New Car Makes More Sense Now",
    description:
      "Many Experts Will Tell You Buying Cars Used Is Best For Your Long-Term Financial Health.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: {
      id: "3",
      name: "Mary",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Automotive",
  },
  {
    _id: "6",
    title: "How To Persuade Your Parents To Buy Fast Food",
    description:
      "Parents Often Don't Want To Buy Fast Food. They May Be Worried That It's Too Expensive.",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
    author: {
      id: "4",
      name: "Jon Kantner",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "May 10, 2022",
    category: "Food",
  },
  {
    _id: "7",
    title: "Typography Can Make Or Break Your Design",
    description:
      "One Of The Most Important Skills You Can Learn As A Designer Is How To Choose Type.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    author: {
      id: "5",
      name: "Robert",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Design",
  },
  {
    _id: "8",
    title: "House Boating On Lake Shasta",
    description:
      "The Best Way To Spend A Long 4th Of July Weekend: Wake Boarding, Swimming, Barbecues.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80",
    author: {
      id: "1",
      name: "James",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Sport",
  },
  {
    _id: "9",
    title: "How To Persuade Your Parents To Buy Fast Food",
    description:
      "Parents Often Don't Want To Buy Fast Food. They May Be Worried That It's Too Expensive.",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
    author: {
      id: "9",
      name: "Jon Kantner",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "May 10, 2022",
    category: "Food",
  },
  {
    _id: "10",
    title: "Typography Can Make Or Break Your Design",
    description:
      "One Of The Most Important Skills You Can Learn As A Designer Is How To Choose Type.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    author: {
      id: "10",
      name: "Robert",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Design",
  },
  {
    _id: "11",
    title: "House Boating On Lake Shasta",
    description:
      "The Best Way To Spend A Long 4th Of July Weekend: Wake Boarding, Swimming, Barbecues.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    author: {
      id: "11",
      name: "James",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Sport",
  },
  {
    _id: "12",
    title: "House Boating On Lake Shasta",
    description:
      "The Best Way To Spend A Long 4th Of July Weekend: Wake Boarding, Swimming, Barbecues.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80",
    author: {
      id: "12",
      name: "James",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
    },
    createdAt: "July 14, 2022",
    category: "Sport",
  },
];
