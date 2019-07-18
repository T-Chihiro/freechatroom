Rails.application.routes.draw do

  root to: 'chat#home'

  get 'chat/home' , to: 'chat#home'

  #新規コメント用
  post 'chat/add' , to: 'chat#add'
  #登録・ログイン用
  post 'chat/regist_login' , to: 'chat#regist_login'
  #コメント削除
  delete 'chat/home' , to: 'chat#destroy'


end
