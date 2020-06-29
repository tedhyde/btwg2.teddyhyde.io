FROM jekyll/jekyll:3.8
#export JEKYLL_VERSION=3.8
#docker run --rm \
#  --volume="$PWD:/srv/jekyll" \
#  -it jekyll/jekyll:$JEKYLL_VERSION \
#  jekyll build

COPY Gemfile /srv/jekyll/Gemfile
# RUN ls /srv/jekyll
RUN bundle install
COPY . /srv/jekyll/
CMD jekyll build 