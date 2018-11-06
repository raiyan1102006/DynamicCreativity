<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- Site Properties -->
    <title>Creativity</title>

    <script src="./assets/library/jquery.min.js"></script>
    <script src="./assets/library/iframe.js"></script>
    <script src="./dist/semantic.min.js"></script>

    <link rel="stylesheet" type="text/css" href="./dist/semantic.css">

    <script>
    $(document)
      .ready( () => {
        $('.ui.modal').modal('attach events','.ui.teal.button','toggle');
        $('.ui.modal').modal('attach events','.ui.green.basic.button','toggle');
      });
    </script>

    <style media="screen">
      .ui.green.buttons .button:hover, .ui.green.button:hover{
        background-color: #16ab39 important!;
        color: #FFFFFF;
        text-shadow: none;
      }
    </style>

  </head>

  <body data-gr-c-s-loaded="true">
    <div id="root" style="height: 100%;">
      <div class="ui vertical attached segment" style="height: 100%; padding-bottom: 0em;">
        <div class="ui stackable grid" style="height: 100%; padding-bottom: 0em;">
          <div class="teal four wide column">
            <div class="ui vertical segment">
              <div class="ui center aligned container">
                <div class="ui header" style="color: rgb(255, 255, 255); padding-top: 2em;">
                  Welcome!
                </div>
              </div>
            </div>
          </div>
          <div class="eleven wide column">
            <div>
              <div class="ui vertical segment">
                <div class="ui center aligned container" style="height: 10em;">
                  <div class="ui header" style="padding-top: 2em;">
                  </div>
                </div>
              </div>
              <div>
                <div class="ui vertical segment" style="padding-bottom: 10em;">
                  <div class="ui text container">
                    <div style="font-size: 1.4em; line-height: 2em;">
                      Thank you for particpating in the Creativity Project!
                    </div>
                    <div style="font-size: 1.4em; line-height: 2em;">
                      This study consists of 5 Tasks
                    </div>
                    <div style="font-size: 1.4em; line-height: 2em;">
                      Each task will have three scetions:
                    </div>
                    <ol>
                      <li style="font-size: 1.4em; line-height: 2em;">
                        You will be asked to come up with alternate uses of the given object
                      </li>
                      <li style="font-size: 1.4em; line-height: 2em;">
                        After you submit your list, we will show what others in your network submitted and you will get to edit your answers
                      </li>
                      <li style="font-size: 1.4em; line-height: 2em;">
                        Then you will be able to view all members of your network and change who you follow, before the next task starts
                      </li>
                    </ol>
                  </div>
                  <div class="ui right aligned container" style="padding-right: 2em;">
                    <div class="ui modal">
                      <i class="close icon"></i>
                      <div class="header">
                        <i class="browser icon"></i>
                        Ready?
                      </div>
                      <div class="content">
                        <p>
                          In this first section, you will be provided 4 minutes to list alternative uses for the prompt. Please note that vulgar answers can result in your expulsion from the study. You need to enter input to continue.
                        </p>
                        <div class="header small red">
                          This is a time section
                        </div>
                      </div>
                      <div class="actions">
                        <button class='ui green basic button' role='button'>
                          <i class='checkmark icon'></i>
                          <a class="item active" style="color: #21BA45;" href="./taskScreen.php">Begin</a>
                        </button>
                      </div>
                    </div>
                    <button class="ui teal button" role="button">
                      Begin Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

</html>
