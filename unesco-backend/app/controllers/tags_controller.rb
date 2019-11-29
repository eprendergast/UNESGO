class TagsController < ApplicationController

    def index
        tags = Tag.all.map{|tag| {name: tag.name }}
        render json: tags
    end

end
