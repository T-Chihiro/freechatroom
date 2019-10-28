class Chatlog < ApplicationRecord
    #validates :name , length: {in: 1..10}
    #コメントの文字数制限
    validates :text ,  presence: true , length: {in: 1..100}
end
