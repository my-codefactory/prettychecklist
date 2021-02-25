require "test_helper"

class TodolistnewControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get todolistnew_new_url
    assert_response :success
  end
end
