/**
 * Thống kê thông tin user
 * - Thống kê tổng số tuổi của người dùng
 * - Thống kê người dùng có số tuổi lớn nhất
 * - Thông kê người dùng có số tuổi nhỏ nhất
 * - Thông kê trong danh sách người dùng của mình, thì nam hay nữ có số lượng nhiều hơn, và nam chiếu bao nhiêu %, nữ chiếm bao nhiêu %
 * - Thống kê danh sách người dùng, có ngày sinh nhật <= 20 ngày so với ngày hiện tại
 */

// tuổi, giới tính, sinh-nhật, name, email, id

const users = [
  { id: 1, name: 'User 1', email: 'user1@gmail.com', dob: new Date('2021-03-22'), gender: 'male', age: 21 },
  { id: 2, name: 'User 2', email: 'user2@gmail.com', dob: new Date('2021-03-10'), gender: 'male', age: 22 },
  { id: 3, name: 'User 3', email: 'user3@gmail.com', dob: new Date('2021-03-11'), gender: 'female', age: 19 },
  { id: 4, name: 'User 4', email: 'user4@gmail.com', dob: new Date('2021-03-12'), gender: 'female', age: 10 },
  { id: 5, name: 'User 5', email: 'user5@gmail.com', dob: new Date('2021-03-15'), gender: 'male', age: 29 },
  { id: 6, name: 'User 6', email: 'user6@gmail.com', dob: new Date('2021-04-22'), gender: 'female', age: 30 },
  { id: 7, name: 'User 7', email: 'user7@gmail.com', dob: new Date('2021-03-14'), gender: 'male', age: 21 },
  { id: 8, name: 'User 8', email: 'user8@gmail.com', dob: new Date('2021-03-12'), gender: 'female', age: 21 },
  { id: 9, name: 'User 9', email: 'user9@gmail.com', dob: new Date('2021-05-22'), gender: 'female', age: 21 },
  { id: 10, name: 'User 10', email: 'user10@gmail.com', dob: new Date('2021-03-22'), gender: 'female', age: 21 },
];

function userStatistics() {

  return {
    total_age: handleTotalAge(users),
    max_age: handlerMaxAge(users),
    min_age: handlerMinAge(users)
  };
}

function handleTotalAge(users) {
  // b1: Lặp qua từng thaq user.
  // b2: Mỗi lần lặp qua user thì mình lấy tuổi của thaq user đó và cộng với tuổi trước đó.
  // b3: Trả về tổng số tuổi.
  // let totalAge = 0;//0 | 21 | 43 | 62 | ...
  // users.forEach(function(user) {// user:1  | user:2 | user:3 | ...
  //   totalAge = totalAge + user.age; //0 + 21 = 21 | 21 + 22 = 43 | 43 + 19 = 62 | ...
  // });
  // return totalAge;

  // let totalAge = 0;
  // for (let i=0; i<users.length; i++) {
  //   totalAge = totalAge + users[i].age;
  // }
  // return totalAge;
  // for(),
  // while do
}

function handlerMaxAge(users) {
  // forEach
  // for
  // while do
}

function handlerMinAge(users) {
  // forEach
  // for
  // while do
}

const result = userStatistics(users);
console.log(result);
/**
 * result = {
 *   total_age: '',
 *   max_age: '',
 *   min_age: '',
 *   male_ratio: 80,
 *   female_ratio: 20,
 *   birthday_coming: [1, 2, 3]
 * };
 */
