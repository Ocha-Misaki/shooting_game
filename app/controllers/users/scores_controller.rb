class Users::ScoresController < ApplicationController
  before_action :authenticate_user!
  def index; end

  def create
    score = current_user.scores.new(score_params)
    if score.save!
      render json: { message: 'スコアを保存しました' }, status: :created
    else
      render json: { message: 'スコアの保存に失敗しました' }, status: :unprocessable_entity
    end
  end

  private

  def score_params
    params.require(:score).permit(:result)
  end
end
