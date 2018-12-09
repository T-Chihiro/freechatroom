class ChatController < ApplicationController
  def home
    #現在時刻
    @time = Time.current.in_time_zone("Asia/Tokyo")
    #テーブルの読み取り
    @user = User.all
    @chatlog = Chatlog.all
    #チャット入力用
    @chat = Chatlog.new()
  end

  #ログイン時
  def login
  end


  #ユーザー登録時
  def regist
  end

  #ログアウト時
  def logout
  end


  #コメント追加時
  def add
    @chat = Chatlog.new(chat_params)
    puts @chat
    if @chat.text != ""
      @chat.save
    end
    redirect_to chat_home_path
  end
  
  #コメント削除
  def destroy
    
    @chat = Chatlog.find(params[:id])
    puts "名前がない場合はデータ削除します"
    if @chat.name == nil
      @chat.destroy
    end
    redirect_to chat_home_path()


  end

  private

  def user_params
    params.require(:user).permit(:name , :password)
  end

  def chat_params
    params.require(:chatlog).permit(:name , :text)
  end


end
