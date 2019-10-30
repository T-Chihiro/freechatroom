class User < ApplicationRecord
#パスワードを暗号化する
  has_secure_password
  #文字数制限
  validates :name , presence: true , uniqueness: true ,   length: {in: 1..10}
  validates :password , presence: true ,  length: {minimum: 3}
end