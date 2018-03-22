<?php include('header.php'); ?>

<div id="page-content">
  <?php
  $modules = get_field('modules');
  if($modules) {
      foreach($modules as $module) {
          switch($module['acf_fc_layout']) {
              case 'shortcode':
                  echo do_shortcode($module['shortcode']);
                  break;
          }
      }
  }
  ?>
</div>

<?php include('footer.php'); ?>
