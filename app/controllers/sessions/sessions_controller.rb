#session管理コントローラー
class Session_Controller < ApplicationController

  #ログイン判定
  def login
    #引数見てログイン確認
    if params.key?(:uid) || params.key?(:password)
      @user = User.find_by(uid: params[:uid], pass: params[:password])
      if @user#ログイン成功。sessionに値を保存する
        flash[:notice] = "ログインに成功しました"
        session[:user_name] = @user.name
      else#ログイン失敗
        session[:user_name] = nil
        flash[:notice] = "ログインに失敗しました"
      end
    end
    redirect_to("/chat/home")
  end


  #ログアウト
  def logout
    session[:user_name] = nil
    redirect_to("chat/home")
  end

end
