function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

const ADD_FRIEND_SCORE = 10;
const ADD_VISITED_SCORE = 1;

const setUserMap = (userMap, [userA, userB]) => {
  userMap.set(userA, [...(userMap.get(userA) || []), userB]);
  userMap.set(userB, [...(userMap.get(userB) || []), userA]);
};

module.exports = problem7;
