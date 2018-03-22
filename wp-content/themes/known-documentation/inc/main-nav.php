<?php

$args = [
  'title_li' => '',
  'echo' => 0
];

$pages = wp_list_pages($args);

if($pages) {
  echo '<a href="#" id="hamburger-btn"><i class="fa fa-bars"></i></a>';
  echo '<div id="main-nav"><ul class="top">';
  echo $pages;
  echo '</div></ul>';
}

?>
