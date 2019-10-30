class Chatlog < ApplicationRecord
    #コメントの文字数制限
    validates :text ,  presence: true , length: {maximum: 100}
end
