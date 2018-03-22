<?php
/**
 * Global ajax variable
 *
 * ajax_object['ajax_url']
 */
add_action( 'wp_enqueue_scripts', 'my_enqueue' );
function my_enqueue($hook) {
    $pageID = get_the_id();
    wp_enqueue_script( 'custom-script', get_bloginfo('template_directory').'/js/dist/all.js', array('jquery') );
    wp_localize_script( 'custom-script', 'ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'page_id' => $pageID,
        'post_type' => get_post_type($pageID)
    ));
}

/**
 * Hide editor on specific pages.
 *
 */
add_action( 'admin_init', 'hide_editor' );
function hide_editor() {
    // Get the Post ID.
    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
    if( !isset( $post_id ) ) return;
    $post_type = get_post_type($post_id);

    if($post_type == 'page') {
        remove_post_type_support('page', 'editor');
    }
}

/**
 * Shortcodes
 *
 */
function airtable_sc( $atts ) {
    $a = shortcode_atts( array(
        'view' => ''
    ), $atts );

    $postID = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
    $appID = get_field('airtable_app_id', $postID);

    if($a['view'] === '') return;

    // Run airtable ajax script
    wp_enqueue_script('airtable-ajax', get_bloginfo('template_directory').'/js/src/airtable.js');
    wp_localize_script('airtable-ajax', 'airtable_view', array(
        'app_id' => $appID,
        'view' => $a['view']
    ));
}
add_shortcode( 'airtable', 'airtable_sc' );

/**
 * Wordpress Menus
 *
 */
add_action('init', 'register_menus');
function register_menus(){
  register_nav_menus(array(
    'main-nav' => __( 'Main Nav' )
  ));
}
?>
