import data from '../middlewares/parse.js';

module.exports = {
	async getUsers(req, res, next) {
    try {
			const [users, statistic] = [await data.pagination(req.query), await data.getStatistic()];
			for (let user in users) {
					const [page_view, clicks] = statistic.filter(obj => obj.user_id === users[user].id).reduce((acc, currentValue) => {
					acc[0] += currentValue.page_views;
					acc[1] += currentValue.clicks;
					return acc;
				}, [0, 0])
				users[user] = { ...users[user], page_view, clicks }
			}
      res.send(users);
    } catch (err) {
      console.log(err);
    }
	},
  async getUser(req, res, next) {
		const data_statistic = await data.getStatistic();
		const users = await data.getUsers()
		const filteredUsers = users.filter(temp => temp.id == req.params.id);
		const statistic = data_statistic.filter(temp => temp["user_id"] == req.params.id);
    res.send({statistic, filteredUsers});
	}
}
