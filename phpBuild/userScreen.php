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
                        All Users
                      </div>
                    </div>
                  </div>
                  <div class="ui vertical segment">
                    <div class="ui container">
                      <div class="ui three column grid">
                        <div class="row">
                          <div class="column">
                            <div class="ui teal fluid card">
                              <button class="ui teal button" role="button">
                                <div class="content teal">
                                  <div class="center aligned header">
                                    <i aria-hidden="true" class="check circle outline icon">
                                    </i>
                                    Someone
                                  </div>
                                </div>
                              </button>
                              <div class="center aligned content">
                                <div role="list" class="ui list">
                                  <div role="listitem" class="item">
                                    List item
                                    <div class="ui rating" role="radiogroup">
                                      <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                      </i>
                                      <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                      </i>
                                      <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                      </i>
                                      <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                      </i>
                                      <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                      </i>
                                    </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="column">
                             <div class="ui teal fluid card">
                               <button class="ui teal button" role="button">
                                 <div class="content teal">
                                   <div class="center aligned header">
                                     <i aria-hidden="true" class="check circle outline icon">
                                     </i>
                                     Someone
                                   </div>
                                 </div>
                               </button>
                               <div class="center aligned content">
                                 <div role="list" class="ui list">
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="column">
                             <div class="ui teal fluid card">
                               <button class="ui teal button" role="button">
                                 <div class="content teal">
                                   <div class="center aligned header">
                                     <i aria-hidden="true" class="check circle outline icon">
                                     </i>
                                     Someone
                                   </div>
                                 </div>
                               </button>
                               <div class="center aligned content">
                                 <div role="list" class="ui list">
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div class="row">
                           <div class="column">
                             <div class="ui teal fluid card">
                               <button class="ui teal button" role="button">
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
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="column">
                             <div class="ui teal fluid card">
                               <button class="ui teal button" role="button">
                                 <div class="content teal">
                                   <div class="center aligned header">
                                     <i aria-hidden="true" class="check circle outline icon">
                                     </i>
                                     Someone
                                   </div>
                                 </div>
                               </button>
                               <div class="center aligned content">
                                 <div role="list" class="ui list">
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="column">
                             <div class="ui teal fluid card">
                               <button class="ui teal button" role="button">
                                 <div class="content teal">
                                   <div class="center aligned header">
                                     <i aria-hidden="true" class="check circle outline icon">
                                     </i>
                                     Someone
                                   </div>
                                 </div>
                               </button>
                               <div class="center aligned content">
                                 <div role="list" class="ui list">
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup">
                                       <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                       <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                       </i>
                                     </div>
                                   </div>
                                   <div role="listitem" class="item">
                                     List item
                                     <div class="ui rating" role="radiogroup"><i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio"></i><i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class="row">
                         <div class="column">
                           <div class="ui teal fluid card">
                             <button class="ui teal button" role="button">
                               <div class="content teal">
                                 <div class="center aligned header">
                                   <i aria-hidden="true" class="check circle outline icon">
                                   </i>
                                   Someone
                                 </div>
                               </div>
                             </button>
                             <div class="center aligned content">
                               <div role="list" class="ui list">
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div class="column">
                           <div class="ui teal fluid card">
                             <button class="ui teal button" role="button">
                               <div class="content teal">
                                 <div class="center aligned header">
                                   <i aria-hidden="true" class="check circle outline icon">
                                   </i>
                                   Someone
                                 </div>
                               </div>
                             </button>
                             <div class="center aligned content">
                               <div role="list" class="ui list">
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div class="column">
                           <div class="ui teal fluid card">
                             <button class="ui teal button" role="button">
                               <div class="content teal">
                                 <div class="center aligned header">
                                   <i aria-hidden="true" class="check circle outline icon">
                                   </i>
                                   Someone
                                 </div>
                               </div>
                             </button>
                             <div class="center aligned content">
                               <div role="list" class="ui list">
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                                 <div role="listitem" class="item">
                                   List item
                                   <div class="ui rating" role="radiogroup">
                                     <i aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                     <i aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" tabindex="0" role="radio">
                                     </i>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="ui right aligned container">
                     <button class="ui button" role="button">
                       <a href="/secondTaskScreen">
                         Next Task
                       </a>
                     </button>
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
