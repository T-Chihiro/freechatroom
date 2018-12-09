class User < ApplicationRecord
#パスワードを使うための一文らしい
  has_secure_password
end
