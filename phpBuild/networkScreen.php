<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- Site Properties -->
    <title>Task Screen</title>

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

  <body data-gr-c-s-loaded="true" class="">

    <div id="root" style="height: 100%;">
      <div>
        <div>
          <div class="ui vertical attached segment" style="height: 100%; padding-bottom: 0em;">
            <div class="ui stackable grid" style="height: 100%; padding-bottom: 0em;">
              <div class="teal four wide column">
                <div class="ui vertical segment">
                  <div class="ui center aligned container">
                    <div class="ui header" style="color: rgb(255, 255, 255); padding-top: 2em;">
                      Welcome!
                    </div>
                    <div role="list" class="ui list">
                      <div role="listitem" class="item">
                        Task 1
                      </div>
                      <div role="listitem" class="item">
                        Task 2
                      </div>
                      <div role="listitem" class="item">
                        Task 3
                      </div>
                      <div role="listitem" class="item">
                        Task 4
                      </div>
                      <div role="listitem" class="item">
                        Task 5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="eleven wide column">
                <div>
                  <div class="ui vertical segment">
                    <div class="ui center aligned container" style="height: 10em;">
                      <div class="ui header" style="padding-top: 2em; font-size: 3em; color: rgb(0, 181, 173);">
                        3:47
                      </div>
                    </div>
                  </div>
                  <div class="ui vertical segment">
                    <div class="ui container stackable equal width grid">
                      <div class="column">
                        <div class="ui cards" style="padding-top: 1.5em;">
                          <div class="ui teal fluid card">
                            <button class="ui teal disabled button" disabled="" role="button" tabindex="-1">
                              <div class="content teal">
                                <div class="center aligned header">
                                  Someone
                                </div>
                              </div>
                            </button>
                            <div class="center aligned content">
                              <div role="list" class="ui list">
                                <div role="listitem" class="item">
                                  List item
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                  </div>
                                  <div role="listitem" class="item">
                                    List item
                                  </div>
                                  <div role="listitem" class="item">
                                    List item
                                   </div>
                                   <div role="listitem" class="item">
                                     List item </div>
                                     <div role="listitem" class="item">
                                       List item
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               <div class="ui teal fluid card">
                                 <button class="ui teal disabled button" disabled="" role="button" tabindex="-1">
                                   <div class="content teal">
                                     <div class="center aligned header">Someone</div></div></button><div class="center aligned content"><div role="list" class="ui list"><div role="listitem" class="item">
                                       List item
                                      </div>
                                      <div role="listitem" class="item">
                                        List item
                                       </div>
                                       <div role="listitem" class="item">
                                         List item
                                        </div>
                                        <div role="listitem" class="item">
                                          List item
                                         </div>
                                         <div role="listitem" class="item">
                                           List item
                                          </div>
                                          <div role="listitem" class="item">
                                            List item
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="ui teal fluid card">
                                       <button class="ui teal disabled button" disabled="" role="button" tabindex="-1">
                                         <div class="content teal">
                                           <div class="center aligned header">
                                             Someone
                                           </div>
                                         </div>
                                       </button>
                                       <div class="center aligned content">
                                         <div role="list" class="ui list">
                                           <div role="listitem" class="item">
                                             List item
                                            </div>
                                            <div role="listitem" class="item">
                                              List item
                                             </div>
                                             <div role="listitem" class="item">
                                               List item
                                              </div>
                                              <div role="listitem" class="item">
                                                List item
                                               </div>
                                               <div role="listitem" class="item">
                                                 List item
                                                </div>
                                                <div role="listitem" class="item">
                                                  List item
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                       <div class="column">
                                         <div class="ui vertical segment" style="padding-bottom: 7em;">
                                           <form class="ui form">
                                             <div class="field">
                                               <label>
                                                 First Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="field">
                                               <label>
                                                 Second Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="field">
                                               <label>
                                                 Third Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="field">
                                               <label>
                                                 Fourth Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="field">
                                               <label>
                                                 Fifth Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="field">
                                               <label>
                                                 Sixth Use
                                               </label>
                                               <div class="field">
                                                 <div class="ui input">
                                                   <input placeholder="Enter Input" type="text">
                                                 </div>
                                               </div>
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
                                                    <a class="item" style="color: #21BA45;" href="./userScreen.php">Next</a>
                                                  </button>

                                                 </div>
                                               </div>

                                               <button class="ui teal button" type="button" role="button" name="button">
                                                 continue
                                               </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
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
