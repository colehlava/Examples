# main.py

import flask

app = flask.Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    # Read button inputs from user
    if flask.request.method == 'POST':
        if flask.request.form.get('on') == 'on':
            print("ON")
        elif flask.request.form.get('off') == 'off':
            print("OFF")

    # Return the rendered html file
    return flask.render_template("index.html")


@app.route("/key_press", methods=['GET', 'POST'])
def keyPressed():
    if flask.request.method == 'POST':
        data = flask.request.get_json()
        print('Key pressed: ' + data['keyVal'])

    # Return the rendered html file
    return flask.render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)

