// use (&quot;sample_airbnb&quot;);
// db.listingsAndReviews.aggregate([
//    {
//      $project: {
//        name: 1,
//        amenities: 1,
//        num_amenities: { $size: &quot;$amenities&quot; }
//      }
//    },
//    {
//      $sort: {
//        num_amenities: -1
//      }
//    },
//    {
//      $limit: 1
//    }
//  ]);









//  
// db.listingsAndReviews.aggregate([
//    {
//      $match: {
//        amenities: {
//          $in: [&quot;Wifi&quot;, &quot;Ethernet&quot;]
//        }
//      }

//    },
//    {
//      $count: &quot;total_propiedades_con_internet&quot;
//    }
//  ])







// db.listingsAndReviews.aggregate([
//    {
//      $match: {
//        &quot;address.country&quot;: &quot;Brazil&quot;,
//        &quot;review_scores.review_scores_rating&quot;: { $gte: 80 },
//        &quot;reviews&quot;: { $exists: true },
//        &quot;amenities&quot;: /Ethernet/
//      }
//    },
//    {
//      $addFields: {
//        &quot;number_of_reviews&quot;: { $size: { $ifNull: [&quot;$reviews&quot;, []] } }
//      }
//    },
//    {
//      $match: {
//        &quot;number_of_reviews&quot;: { $gte: 50 }
//      }
//    },
//    {

//      $project: {
//        &quot;property_id&quot;: 1,
//        &quot;name&quot;: 1,
//        &quot;amenities&quot;: 1,
//        &quot;review_scores_rating&quot;: &quot;$review_scores.review_scores_rating&quot;,
//        &quot;number_of_reviews&quot;: 1
//      }
//    }
//  ])









// db.listingsAndReviews.aggregate([
//        {
//          $match: {
//            &quot;room_type&quot;: &quot;Entire home/apt&quot;
//          }
//        },
//        {
//          $group: {
//            _id: &quot;$address.country&quot;,
    
//            avg_price: { $avg: &quot;$price&quot; }
//          }
//        },
//        {
//          $project: {
//            _id: 0,
//            country: &quot;$_id&quot;,
//            avg_price: { $round: [ &quot;$avg_price&quot;, 2 ] }
//          }
//        }
//      ])




//https://charts.mongodb.com/charts-project-0-zxdka/dashboards/645707d5-2672-45a6-8ecc-08e611b083a8
