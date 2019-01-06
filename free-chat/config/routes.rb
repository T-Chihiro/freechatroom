Rails.application.routes.draw do

  root to: 'chat#home'

  get 'chat/home' , to: 'chat#home'

  #新規コメント用
  #match 'chat/add' => 'chat#add',:via => :post
  #match 'chat/regist_login'  => 'chat#regist_login',:via => :post
  post 'chat/add' , to: 'chat#add'
  #登録・ログイン用
  post 'chat/regist_login' , to: 'chat#regist_login'
  #patch 'chat/home' , to: 'chat#add'
  #コメント削除
  delete 'chat/home' , to: 'chat#destroy'


end
