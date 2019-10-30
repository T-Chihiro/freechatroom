class User < ApplicationRecord
#パスワードを暗号化する
  has_secure_password
  #文字数制限
  validates :name , presence: true , uniqueness: true ,   length: {maximum: 10}
  validates :password , presence: true
end