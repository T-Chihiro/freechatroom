Rails.application.routes.draw do

  #スタート画面
  root to: 'chat#home'

  get 'chat/home' , to: 'chat#home'

  #新規コメント用
  post 'chat/add' , to: 'chat#add'
  #登録・ログイン用
  post 'chat/regist_login' , to: 'chat#regist_login'
  #コメント削除
  delete 'chat/home' , to: 'chat#destroy'

  #ログイン、ログアウト用
  post 'sessions/login' => "sessions#new"
  post "sessions/logout" => "sessions#logout"



end
