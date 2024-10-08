import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const userService = {
  // Foydalanuvchilar ro'yxatini olish
  getAllUsers() {
    return axios.get(API_URL)
      .then(response => response.data)
      .catch(error => {
        console.error("Foydalanuvchilarni olishda xato:", error);
        throw error; // Xatoni tashlaydi
      });
  },

  // Foydalanuvchi ma'lumotlarini ID bo'yicha olish
  getUserById(userId) {
    return axios.get(`${API_URL}/${userId}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Foydalanuvchini olishda xato: ${userId}`, error);
        throw error; // Xatoni tashlaydi
      });
  }
};

export default userService;
