Rails.application.routes.draw do

  #スタート画面
  root to: 'chat#home'

  get 'chat/home' , to: 'chat#home'

  #新規コメント用
  get 'chat/add' , to: 'chat#home'#再読み込み回避用
  post 'chat/add' , to: 'chat#add'
  #登録・ログイン用
  post 'chat/registlogin' , to: 'chat#registlogin'
  #コメント削除
  delete 'chat/home' , to: 'chat#destroy'

  #(登録、)ログイン、ログアウト用
  get 'sessions/registlogin' , to: "chat#home"#再読み込み回避用
  post 'sessions/registlogin' , to: "sessions#registlogin"
  post "sessions/logout" , to: "sessions#logout"



end
