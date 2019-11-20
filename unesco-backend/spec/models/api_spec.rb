require 'rails_helper'

RSpec.describe API do 

    describe '.get_sites' do 
        it 'returns an array of length 1121' do
            expect(API.get_sites.length).to eq 1121
        end
    end

    describe '.get_site' do
        it 'returns a hash' do 
            expect(API.get_site(1).class).to eq Hash
        end

        it 'returns some data about the site' do 
            expect(API.get_site(1)["name"]).to_not be nil 
        end
    end

end