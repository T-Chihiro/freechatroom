#session管理コントローラー
class SessionsController < ApplicationController
  #ユーザー登録、ログイン判定
  def registlogin
    @user = User.new(user_params)
    search_user = User.find_by(name: @user.name)
    if params[:commit] == " 登録 "
      if @user.save
        flash[:login_notice] =  "「#{@user.name}」を登録しました"
        #@user.save
        redirect_to chat_home_path()
      else
        #if search_user
          #flash[:login_notice] =  "「#{@user.name}」は既に登録されています"
        #else
          #flash[:login_notice] =  "入力が不適切です"
        #end
        render template: "chat/home"
      end
    elsif params[:commit] == "ログイン"
      search_user = User.find_by(name: @user.name)
      #ユーザー名とパスワード確認
      if search_user && search_user.authenticate(@user.password)
        flash[:login_notice] =  "#{@user.name}でログインしました"
        session[:user_name] = @user.name
        redirect_to chat_home_path()
      else
        if search_user
          flash[:login_notice] =  "パスワードが間違っています"
        else
          flash[:login_notice] =  "ユーザー「#{@user.name}」は存在しません"
        end
          session[:user_name] = nil
          render template: "chat/home"
      end
    else
      redirect_to chat_home_path()
    end


  end


  #ログアウト
  def logout
    session[:user_name] = nil
    redirect_to chat_home_path()
  end

  private
  def user_params#変数二つをクラスにまとめて返す
    params.require(:user).permit(:name , :password)
  end


end
