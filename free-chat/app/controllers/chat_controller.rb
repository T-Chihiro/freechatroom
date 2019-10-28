class ChatController < ApplicationController
  def home
    #現在時刻
    @time = Time.current.in_time_zone("Asia/Tokyo")
    #テーブルの読み取り
    @users = User.all
    @chatlog = Chatlog.all
    #ユーザー登録・ログイン用
    @user = User.new()
    #チャット入力用
    @chat = Chatlog.new()
    #puts "表示します"
    #puts params[:name]

  end

  #ユーザー登録・ログイン時
  def regist_login
	@user = User.new(user_params)
	puts @user
	search_user = User.find_by(name: @user.name)
	if params[:commit] == "登録"
		puts  =  "登録中"
		if search_user
			flash[:alert] =  "その名前は既に登録されています"
			@user.destroy
		elsif @user.name != "" && @user.password != nil
			flash[:alert] =  "登録しました"
			@user.save
		else
			flash[:alert] =  "入力が不十分です"
		end

	elsif params[:commit] == "ログイン"
		p "ログイン中"
		search_user = User.find_by(name: @user.name)
		if search_user && search_user.authenticate(@user.password)
			flash[:alert] =  "ログイン成功"
			redirect_to chat_home_path(name:@user.name)
			return
		else
			if search_user
				flash[:alert] =  "パスワードが間違っています"
			else
				flash[:alert] =  "そのユーザー名は存在しません"
			end
		end

	end
	redirect_to chat_home_path
  end

  #ログアウト時
  #def logout
  #end

  #コメント追加時
  def add
    @chat = Chatlog.new(chat_params)
    puts @chat
    if @chat.text != ""
      @chat.save
    end
    redirect_to chat_home_path(name: params[:name])
  end

  #コメント削除
  def destroy
    @chat = Chatlog.find(params[:id])
    #puts "名前がない場合はデータ削除します"
    #if @chat.name == nil
    @chat.destroy
    #end
    redirect_to chat_home_path(name: params[:name])


  end

  private
  def user_params
    params.require(:user).permit(:name , :password)
  end

  def chat_params
    params.require(:chatlog).permit(:name , :text)
  end


end
