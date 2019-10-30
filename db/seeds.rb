# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name:"admin" , password: "19951221")
User.create(name:"chidai" , password: "19951221")

Chatlog.create(name:"chidai" , text:  "ゆっくりしていってね！")
Chatlog.create(text:  "今日も元気に体を動かしましょう")

