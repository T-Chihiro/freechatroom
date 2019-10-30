class ChatController < ApplicationController
  def home
  end

  #コメント追加時
  def add
    @chat = Chatlog.new(chat_params)
    #名前にユーザー名を入れる(ログインしていなかったらnil)
    @chat.name = session[:user_name]
    if @chat.save
      redirect_to chat_home_path()
    else
      render action: "home"
    end
  end

  #コメント削除
  def destroy
    @chat = Chatlog.find(params[:id])
    @chat.destroy
    redirect_to chat_home_path()
  end

  private
  def chat_params#変数二つをクラスにまとめて返す
    params.require(:chatlog).permit(:name , :text)
  end


end
