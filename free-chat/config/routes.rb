Rails.application.routes.draw do

  root to: 'chat#home'

  get 'chat/home' , to: 'chat#home'
  #新規コメント用
  post 'chat/home' , to: 'chat#add'
  #patch 'chat/home' , to: 'chat#add'
  #コメント削除
  delete 'chat/home' , to: 'chat#destroy'


end
