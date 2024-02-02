class Score < ApplicationRecord
  belongs_to :user
  validates :result, presence: true
end
