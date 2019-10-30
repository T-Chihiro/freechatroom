class User < ApplicationRecord
#パスワードを暗号化する
  #文字数制限
  validates :name , presence: true , uniqueness: true ,   length: {maximum: 10}
  has_secure_password
  #validates :password , presence: true
end