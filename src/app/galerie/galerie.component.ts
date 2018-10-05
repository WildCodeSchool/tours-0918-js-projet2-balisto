import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  produits: any;

  constructor() {

  }

  ngOnInit() {

    this.produits = [{
      '_id': '90377297',
      'quantity': '5000ml',
      'complete': 0,
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-completed',
        'en:packaging-to-be-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ],
      'informers_tags': [
        'openfoodfacts-contributors'
      ],
      'additives_prev_original_tags': [],
      'countries_hierarchy': [
        'en:belgium'
      ],
      'countries': 'en:BE',
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'minerals_tags': [],
      'countries_tags': [
        'en:belgium'
      ],
      'sortkey': 538213522,
      'ingredients_tags': [],
      'languages_codes': {
        'fr': 2
      },
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'nutrition_data_prepared_per': '100g',
      'ingredients_original_tags': [],
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'code': '90377297',
      'ingredients_text_with_allergens_fr': null,
      'product_name': 'Jus pomme cerise',
      'last_editor': 'openfoodfacts-contributors',
      'nutriments': {},
      'additives_old_tags': [],
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'serving_quantity': 0,
      'checkers_tags': [],
      'vitamins_prev_tags': [],
      'traces_from_ingredients': '',
      'additives_prev_tags': [],
      'lang': 'fr',
      'last_modified_t': 1538213522,
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'nucleotides_prev_tags': [],
      'quality_tags': [],
      'nutrient_levels_tags': [],
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'last_modified_by': null,
      'product_name_fr': 'Jus pomme cerise',
      'traces_hierarchy': [],
      'correctors_tags': [
        'openfoodfacts-contributors'
      ],
      'unknown_nutrients_tags': [],
      'ingredients': [],
      'brands': 'Minute Maid',
      'additives_tags': [],
      'id': '90377297',
      'images': {
        '1': {
          'uploader': 'openfoodfacts-contributors',
          'uploaded_t': 1538213429,
          'sizes': {
            '100': {
              'h': 100,
              'w': 75
             },
            '400': {
              'h': 400,
              'w': 300
            },
            'full': {
              'h': 4032,
              'w': 3024
            }
          }
        },
        '2': {
          'uploaded_t': 1538213521,
          'sizes': {
            '100': {
              'w': 75,
              'h': 100
            },
            '400': {
              'w': 300,
              'h': 400
            },
            'full': {
              'w': 3024,
              'h': 4032
            }
          },
          'uploader': 'openfoodfacts-contributors'
        },
        'front_fr': {
          'normalize': null,
          'x2': '-1',
          'sizes': {
            '100': {
              'w': 75,
              'h': 100
            },
            '200': {
              'w': 150,
              'h': 200
            },
            '400': {
              'w': 300,
              'h': 400
            },
            'full': {
              'h': 4032,
              'w': 3024
            }
          },
          'x1': '-1',
          'y1': '-1',
          'imgid': '1',
          'white_magic': null,
          'rev': '5',
          'angle': 0,
          'y2': '-1',
          'geometry': '0x0--10--10'
        }
      },
      'allergens_hierarchy': [],
      'additives_debug_tags': [],
      'editors_tags': [
        'openfoodfacts-contributors'
      ],
      'unknown_ingredients_n': 0,
      'minerals_prev_tags': [],
      'traces_tags': [],
      'codes_tags': [
        'code-8',
        '90377297',
        '9037729x',
        '903772xx',
        '90377xxx',
        '9037xxxx',
        '903xxxxx',
        '90xxxxxx',
        '9xxxxxxx'
      ],
      'ingredients_from_palm_oil_tags': [],
      'photographers_tags': [
        'openfoodfacts-contributors'
      ],
      'ingredients_text_with_allergens': null,
      'nutrient_levels': {},
      '_keywords': [
        'maid',
        'minute',
        'ju',
        'cerise',
        'pomme'
      ],
      'max_imgid': 2,
      'last_image_t': 1538213522,
      'languages': {
        'en:french': 2
      },
      'creator': 'openfoodfacts-contributors',
      'allergens_from_ingredients': '',
      'nutrition_data_per': '100g',
      'no_nutrition_data': '',
      'brands_debug_tags': [],
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-completed, en:packaging-to-be-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded',
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'rev': 7,
      'nova_group_tags': [
        'not-applicable'
      ],
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nucleotides_tags': [],
      'lc': 'fr',
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-completed',
        'en:packaging-to-be-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ],
      'created_t': 1538213429,
      'languages_tags': [
        'en:french',
        'en:1'
      ],
      'languages_hierarchy': [
        'en:french'
      ],
      'amino_acids_prev_tags': [],
      'ingredients_debug': [],
      'interface_version_modified': '20150316.jqm2',
      'vitamins_tags': [],
      'allergens_tags': [],
      'interface_version_created': '20120622',
      'last_image_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'product_quantity': 200,
      'brands_tags': [
        'minute-maid'
      ],
      'quantity_debug_tags': []
    },
    {
      '_id': '96096826',
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'vitamins_prev_tags': [],
      'checkers_tags': [],
      'serving_quantity': 0,
      'nutrition_data_per_debug_tags': [],
      'traces_from_ingredients': '',
      'additives_prev_tags': [],
      'last_modified_t': 1538211949,
      'lang': 'fr',
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'nucleotides_prev_tags': [],
      'quality_tags': [],
      'nutrient_levels_tags': [],
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'product_name_fr': 'Madagascan vanilla grinder',
      'last_modified_by': null,
      'informers_tags': [
        'kiliweb'
      ],
      'additives_prev_original_tags': [],
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-to-be-completed',
        'en:product-name-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ],
      'complete': 0,
      'countries_hierarchy': [
        'en:france'
      ],
      'minerals_tags': [],
      'countries_tags': [
        'en:france'
      ],
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:france',
      'ingredients_tags': [],
      'sortkey': 538211949,
      'languages_codes': {
        'fr': 3
      },
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'product_name': 'Madagascan vanilla grinder',
      'code': '96096826',
      'ingredients_text_with_allergens_fr': null,
      'countries_debug_tags': [],
      'last_editor': null,
      'nutriments': {
        'carbohydrates_serving': '',
        'saturated-fat_serving': '',
        'fat': '9',
        'sugars': '15',
        'sodium_100g': 0.003937007874015748,
        'energy_serving': '',
        'energy_value': '323',
        'proteins': 5.1,
        'energy_unit': 'kcal',
        'fat_serving': '',
        'salt_100g': 0.01,
        'salt_value': '0.01',
        'sodium_serving': '',
        'energy_100g': '1351',
        'salt_serving': '',
        'saturated-fat': 1.2,
        'salt': 0.01,
        'sugars_value': '15',
        'salt_unit': '',
        'proteins_value': '5.1',
        'fat_100g': '9',
        'proteins_serving': '',
        'fat_unit': '',
        'carbohydrates_value': '38',
        'saturated-fat_value': '1.2',
        'sugars_serving': '',
        'fat_value': '9',
        'proteins_100g': 5.1,
        'carbohydrates_100g': '38',
        'sugars_100g': '15',
        'carbohydrates_unit': '',
        'saturated-fat_unit': '',
        'energy': '1351',
        'saturated-fat_100g': 1.2,
        'sodium': 0.003937007874015748,
        'carbohydrates': '38',
        'proteins_unit': '',
        'sugars_unit': ''
      },
      'creator': 'kiliweb',
      'allergens_from_ingredients': '',
      'nutrition_data_per': '100g',
      'no_nutrition_data': '',
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded',
      'nutrition_score_debug': 'no score when the product does not have a category',
      'rev': 7,
      'nova_group_tags': [
        'not-applicable'
      ],
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'nucleotides_tags': [],
      'lc': 'fr',
      'amino_acids_prev_tags': [],
      'languages_tags': [
        'en:french',
        'en:1'
      ],
      'languages_hierarchy': [
        'en:french'
      ],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-to-be-completed',
        'en:product-name-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ],
      'created_t': 1538211946,
      'vitamins_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'ingredients_debug': [],
      'allergens_tags': [],
      'interface_version_created': '20150316.jqm2',
      'last_image_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'traces_hierarchy': [],
      'unknown_nutrients_tags': [],
      'correctors_tags': [
        'openfoodfacts-contributors'
      ],
      'ingredients': [],
      'id': '96096826',
      'additives_tags': [],
      'allergens_hierarchy': [],
      'images': {
        '1': {
          'uploaded_t': 1538211947,
          'sizes': {
            '100': {
              'h': 100,
              'w': 65
            },
            '400': {
              'w': 262,
              'h': 400
            },
            'full': {
              'h': 1200,
              'w': 785
            }
          },
          'uploader': 'kiliweb'
        },
        '2': {
          'uploader': 'kiliweb',
          'uploaded_t': 1538211948,
          'sizes': {
            '100': {
              'h': 64,
              'w': 100
            },
            '400': {
              'h': 255,
              'w': 400
            },
            'full': {
              'w': 1644,
              'h': 1049
            }
          }
        },
        'ingredients_fr': {
          'imgid': '2',
          'white_magic': '0',
          'normalize': '0',
          'sizes': {
            '100': {
              'w': 100,
              'h': 64
            },
            '200': {
              'w': 200,
              'h': 128
            },
            '400': {
              'h': 255,
              'w': 400
            },
            'full': {
              'w': 1644,
              'h': 1049
            }
          },
          'x2': null,
          'x1': null,
          'y1': null,
          'y2': null,
          'geometry': '0x0-0-0',
          'rev': 7,
          'angle': null
        },
        'front_fr': {
          'geometry': '0x0-0-0',
          'y2': null,
          'angle': null,
          'rev': '4',
          'white_magic': '0',
          'imgid': '1',
          'y1': null,
          'sizes': {
            '100': {
              'w': 65,
              'h': 100
            },
            '200': {
              'h': 200,
              'w': 131
            },
            '400': {
              'h': 400,
              'w': 262
            },
            'full': {
              'w': 785,
              'h': 1200
            }
          },
          'x1': null,
          'x2': null,
          'normalize': '0'
        }
      },
      'editors_tags': [
        'kiliweb',
        'openfoodfacts-contributors'
      ],
      'additives_debug_tags': [],
      'unknown_ingredients_n': 0,
      'traces_tags': [],
      'codes_tags': [
        'code-8',
        '96096826',
        '9609682x',
        '960968xx',
        '96096xxx',
        '9609xxxx',
        '960xxxxx',
        '96xxxxxx',
        '9xxxxxxx'
      ],
      'minerals_prev_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'photographers_tags': [
        'kiliweb'
      ],
      '_keywords': [
        'madagascan',
        'grinder',
        'vanilla'
      ],
      'nutrient_levels': {},
      'ingredients_text_with_allergens': null,
      'max_imgid': '2',
      'languages': {
        'en:french': 3
      },
      'last_image_t': 1538211948
    },
    /* {
      '_id': '9004145003316',
      'sortkey': 538210249,
      'codes_tags': [
        'code-13',
        '9004145003316',
        '900414500331x',
        '90041450033xx',
        '9004145003xxx',
        '900414500xxxx',
        '90041450xxxxx',
        '9004145xxxxxx',
        '900414xxxxxxx',
        '90041xxxxxxxx',
        '9004xxxxxxxxx',
        '900xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'countries_tags': [
        'en:switzerland'
      ],
      'images': {
        '1': {
          'sizes': {
            '100': {
              'h': 100,
              'w': 49
            },
            '400': {
              'w': 194,
              'h': 400
            },
            'full': {
              'w': 1568,
              'h': 3226
            }
          },
          'uploaded_t': 1538209940,
          'uploader': 'openfoodfacts-contributors'
        },
        '2': {
          'uploader': 'openfoodfacts-contributors',
          'uploaded_t': 1538210248,
          'sizes': {
            '100': {
              'w': 49,
              'h': 100
            },
            '400': {
              'h': 400,
              'w': 194
            },
            'full': {
              'w': 1568,
              'h': 3226
            }
          }
        }
      },
      'countries': 'en:CH',
      'editors_tags': [
        'openfoodfacts-contributors'
      ],
      'informers_tags': [
        'openfoodfacts-contributors'
      ],
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-to-be-completed',
        'en:product-name-to-be-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ],
      'complete': 0,
      'id': '9004145003316',
      'countries_hierarchy': [
        'en:switzerland'
      ],
      'correctors_tags': [],
      'code': '9004145003316',
      'languages': {},
      'last_image_t': 1538210249,
      'last_editor': 'openfoodfacts-contributors',
      'max_imgid': 2,
      '_keywords': [],
      'languages_codes': {},
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'photographers_tags': [
        'openfoodfacts-contributors'
      ],
      'lc': 'en',
      'lang': 'en',
      'last_modified_t': 1538210249,
      'rev': 3,
      'checkers_tags': [],
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded',
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'creator': 'openfoodfacts-contributors',
      'last_modified_by': null,
      'interface_version_created': '20120622',
      'last_image_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'languages_tags': [
        'en:0'
      ],
      'languages_hierarchy': [],
      'created_t': 1538209940,
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-to-be-completed',
        'en:product-name-to-be-completed',
        'en:photos-to-be-validated',
        'en:photos-uploaded'
      ]
    }, */
    {
      '_id': '9066000293805',
      'quality_tags': [],
      'nucleotides_prev_tags': [],
      'packaging': 'Stück',
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'last_modified_by': 'date-limite-app',
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'nutrient_levels_tags': [],
      'vitamins_prev_tags': [],
      'checkers_tags': [],
      'serving_quantity': 0,
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'last_modified_t': 1538209069,
      'lang': 'de',
      'traces_from_ingredients': '',
      'additives_prev_tags': [],
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'languages_codes': {
        'de': 1
      },
      'countries_debug_tags': [],
      'nutriments': {},
      'last_editor': 'date-limite-app',
      'code': '9066000293805',
      'product_name': 'Schärdinger Rauchkäse',
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'informers_tags': [
        'openfoodfacts-contributors',
        'date-limite-app'
      ],
      'additives_prev_original_tags': [],
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'complete': 0,
      'quantity': '150 g',
      'ingredients_tags': [],
      'sortkey': 538209069,
      'product_name_de': 'Schärdinger Rauchkäse',
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'minerals_tags': [],
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:FR, en:de',
      'interface_version_created': '20150316.jqm2',
      'allergens_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'vitamins_tags': [],
      'ingredients_debug': [],
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538209069,
      'quantity_debug_tags': [],
      'product_quantity': 150,
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'ingredients_text_with_allergens_de': null,
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      'creator': 'date-limite-app',
      'nutrition_data_per': '100g',
      'allergens_from_ingredients': '',
      'lc': 'de',
      'nucleotides_tags': [],
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nova_group_tags': [
        'not-applicable'
      ],
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'rev': 3,
      'nutrient_levels': {},
      '_keywords': [
        'rauchkase',
        'schardinger'
      ],
      'product_name_de_debug_tags': [],
      'ingredients_text_with_allergens': null,
      'packaging_tags': [
        'stuck'
      ],
      'photographers_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'languages': {
        'en:german': 1
      },
      'id': '9066000293805',
      'additives_tags': [],
      'ingredients': [],
      'unknown_nutrients_tags': [],
      'correctors_tags': [
        'date-limite-app'
      ],
      'traces_hierarchy': [],
      'codes_tags': [
        'code-13',
        9066000293805,
        '906600029380x',
        '90660002938xx',
        '9066000293xxx',
        '906600029xxxx',
        '90660002xxxxx',
        '9066000xxxxxx',
        '906600xxxxxxx',
        '90660xxxxxxxx',
        '9066xxxxxxxxx',
        '906xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'traces_tags': [],
      'minerals_prev_tags': [],
      'unknown_ingredients_n': 0,
      'editors_tags': [
        'openfoodfacts-contributors',
        'date-limite-app'
      ],
      'additives_debug_tags': [],
      'allergens_hierarchy': []
    },
    {
      '_id': '9066000285503',
      'quantity': '150 g',
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'complete': 0,
      'additives_prev_original_tags': [],
      'informers_tags': [
        'date-limite-app'
      ],
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'countries': 'en:FR, en:de',
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'ingredients_text_debug': null,
      'minerals_tags': [],
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'product_name_de': 'Schärdinger Gouda',
      'sortkey': 538209025,
      'ingredients_tags': [],
      'languages_codes': {
        'de': 1
      },
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'nutrition_data_prepared_per': '100g',
      'ingredients_original_tags': [],
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'product_name': 'Schärdinger Gouda',
      'code': '9066000285503',
      'last_editor': 'date-limite-app',
      'nutriments': {},
      'countries_debug_tags': [],
      'additives_old_tags': [],
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'serving_quantity': 0,
      'vitamins_prev_tags': [],
      'checkers_tags': [],
      'additives_prev_tags': [],
      'traces_from_ingredients': '',
      'lang': 'de',
      'last_modified_t': 1538209025,
      'product_name_debug_tags': [],
      'ingredients_ids_debug': [],
      'packaging': 'Stück',
      'nucleotides_prev_tags': [],
      'quality_tags': [],
      'nutrient_levels_tags': [],
      'ingredients_hierarchy': [],
      'additives_original_tags': [],
      'last_modified_by': 'date-limite-app',
      'traces_hierarchy': [],
      'correctors_tags': [],
      'unknown_nutrients_tags': [],
      'ingredients': [],
      'additives_tags': [],
      'id': '9066000285503',
      'allergens_hierarchy': [],
      'additives_debug_tags': [],
      'editors_tags': [
        'date-limite-app'
      ],
      'unknown_ingredients_n': 0,
      'minerals_prev_tags': [],
      'codes_tags': [
        'code-13',
        9066000285503,
        '906600028550x',
        '90660002855xx',
        '9066000285xxx',
        '906600028xxxx',
        '90660002xxxxx',
        '9066000xxxxxx',
        '906600xxxxxxx',
        '90660xxxxxxxx',
        '9066xxxxxxxxx',
        '906xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'traces_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'photographers_tags': [],
      'packaging_tags': [
        'stuck'
      ],
      'ingredients_text_with_allergens': null,
      '_keywords': [
        'schardinger',
        'gouda'
      ],
      'product_name_de_debug_tags': [],
      'nutrient_levels': {},
      'languages': {
        'en:german': 1
      },
      'allergens_from_ingredients': '',
      'nutrition_data_per': '100g',
      'creator': 'date-limite-app',
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      'ingredients_text_with_allergens_de': null,
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'nova_group_tags': [
        'not-applicable'
      ],
      'rev': 1,
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nucleotides_tags': [],
      'lc': 'de',
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538209024,
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'ingredients_debug': [],
      'interface_version_modified': '20150316.jqm2',
      'vitamins_tags': [],
      'allergens_tags': [],
      'interface_version_created': '20150316.jqm2',
      'product_quantity': 150,
      'quantity_debug_tags': []
    },
    {
      '_id': '9066001415909',
      'product_name_de': 'Latella mini Mango',
      'countries': 'en:FR, en:de',
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'minerals_tags': [],
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'sortkey': 538208984,
      'ingredients_tags': [],
      'quantity': '200 ml',
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'complete': 0,
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'informers_tags': [
        'date-limite-app'
      ],
      'additives_prev_original_tags': [],
      'last_editor': 'date-limite-app',
      'nutriments': {},
      'countries_debug_tags': [],
      'code': '9066001415909',
      'product_name': 'Latella mini Mango',
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'languages_codes': {
        'de': 1
      },
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'amino_acids_tags': [],
      'nutrition_data_prepared_per': '100g',
      'ingredients_original_tags': [],
      'additives_prev_tags': [],
      'traces_from_ingredients': '',
      'lang': 'de',
      'last_modified_t': 1538208984,
      'additives_old_tags': [],
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'serving_quantity': 0,
      'vitamins_prev_tags': [],
      'checkers_tags': [],
      'nutrient_levels_tags': [],
      'last_modified_by': 'date-limite-app',
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'quality_tags': [],
      'nucleotides_prev_tags': [],
      'additives_debug_tags': [],
      'editors_tags': [
        'date-limite-app'
      ],
      'allergens_hierarchy': [],
      'minerals_prev_tags': [],
      'codes_tags': [
        'code-13',
        9066001415909,
        '906600141590x',
        '90660014159xx',
        '9066001415xxx',
        '906600141xxxx',
        '90660014xxxxx',
        '9066001xxxxxx',
        '906600xxxxxxx',
        '90660xxxxxxxx',
        '9066xxxxxxxxx',
        '906xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'traces_tags': [],
      'unknown_ingredients_n': 0,
      'correctors_tags': [],
      'unknown_nutrients_tags': [],
      'traces_hierarchy': [],
      'additives_tags': [],
      'id': '9066001415909',
      'ingredients': [],
      'languages': {
        'en:german': 1
      },
      'photographers_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'ingredients_text_with_allergens': null,
      'nutrient_levels': {},
      '_keywords': [
        'latella',
        'mango',
        'mini'
      ],
      'product_name_de_debug_tags': [],
      'nova_group_tags': [
        'not-applicable'
      ],
      'rev': 1,
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'nutrition_score_debug': 'no score when the product does not have a category',
      'lc': 'de',
      'nucleotides_tags': [],
      'allergens_from_ingredients': '',
      'nutrition_data_per': '100g',
      'creator': 'date-limite-app',
      'ingredients_text_with_allergens_de': null,
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'no_nutrition_data': '',
      'product_quantity': 200,
      'quantity_debug_tags': [],
      'ingredients_debug': [],
      'interface_version_modified': '20150316.jqm2',
      'vitamins_tags': [],
      'created_t': 1538208984,
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-to-be-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'interface_version_created': '20150316.jqm2',
      'allergens_tags': []
    },
    {
      '_id': '9066001416005',
      'languages': {
        'en:german': 1
      },
      'photographers_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'nutrient_levels': {},
      '_keywords': [
        'mini',
        'lattella',
        'erdbeer'
      ],
      'product_name_de_debug_tags': [],
      'ingredients_text_with_allergens': null,
      'packaging_tags': [
        'stuck'
      ],
      'editors_tags': [
        'date-limite-app'
      ],
      'additives_debug_tags': [],
      'allergens_hierarchy': [],
      'codes_tags': [
        'code-13',
        9066001416005,
        '906600141600x',
        '90660014160xx',
        '9066001416xxx',
        '906600141xxxx',
        '90660014xxxxx',
        '9066001xxxxxx',
        '906600xxxxxxx',
        '90660xxxxxxxx',
        '9066xxxxxxxxx',
        '906xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'traces_tags': [],
      'minerals_prev_tags': [],
      'unknown_ingredients_n': 0,
      'unknown_nutrients_tags': [],
      'correctors_tags': [],
      'traces_hierarchy': [],
      'id': '9066001416005',
      'additives_tags': [],
      'ingredients': [],
      'product_quantity': 200,
      'quantity_debug_tags': [],
      'vitamins_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'ingredients_debug': [],
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538208911,
      'interface_version_created': '20150316.jqm2',
      'allergens_tags': [],
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nova_group_tags': [
        'not-applicable'
      ],
      'rev': 1,
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'nucleotides_tags': [],
      'lc': 'de',
      'allergens_from_ingredients': '',
      'nutrition_data_per': '100g',
      'creator': 'date-limite-app',
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'ingredients_text_with_allergens_de': null,
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      'countries_debug_tags': [],
      'last_editor': 'date-limite-app',
      'nutriments': {},
      'code': '9066001416005',
      'product_name': 'Lattella mini Erdbeer',
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'languages_codes': {
        'de': 1
      },
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'product_name_de': 'Lattella mini Erdbeer',
      'minerals_tags': [],
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:FR, en:de',
      'ingredients_text_debug': null,
      'ingredients_tags': [],
      'sortkey': 538208911,
      'quantity': '200 ml',
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'informers_tags': [
        'date-limite-app'
      ],
      'additives_prev_original_tags': [],
      'complete': 0,
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'nutrient_levels_tags': [],
      'last_modified_by': 'date-limite-app',
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'packaging': 'Stück',
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'quality_tags': [],
      'nucleotides_prev_tags': [],
      'traces_from_ingredients': '',
      'additives_prev_tags': [],
      'lang': 'de',
      'last_modified_t': 1538208911,
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'checkers_tags': [],
      'vitamins_prev_tags': [],
      'serving_quantity': 0
    },
    {
      '_id': '90088513',
      'languages': {
        'en:german': 1
      },
      'ingredients_from_palm_oil_tags': [],
      'photographers_tags': [],
      'packaging_tags': [
        'stuck'
      ],
      '_keywords': [
        'riemenschneider',
        'krauter'
      ],
      'product_name_de_debug_tags': [],
      'nutrient_levels': {},
      'ingredients_text_with_allergens': null,
      'allergens_hierarchy': [],
      'editors_tags': [
        'date-limite-app'
      ],
      'additives_debug_tags': [],
      'unknown_ingredients_n': 0,
      'traces_tags': [],
      'codes_tags': [
        'code-8',
        90088513,
        '9008851x',
        '900885xx',
        '90088xxx',
        '9008xxxx',
        '900xxxxx',
        '90xxxxxx',
        '9xxxxxxx'
      ],
      'minerals_prev_tags': [],
      'traces_hierarchy': [],
      'unknown_nutrients_tags': [],
      'correctors_tags': [],
      'ingredients': [],
      'id': '90088513',
      'additives_tags': [],
      'product_quantity': 90,
      'quantity_debug_tags': [],
      'languages_hierarchy': [
        'en:german'
      ],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'amino_acids_prev_tags': [],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538208588,
      'vitamins_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'ingredients_debug': [],
      'allergens_tags': [],
      'interface_version_created': '20150316.jqm2',
      'nutrition_score_debug': 'no score when the product does not have a category',
      'rev': 1,
      'nova_group_tags': [
        'not-applicable'
      ],
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'lc': 'de',
      'nucleotides_tags': [],
      'nutrition_data_per': '100g',
      'allergens_from_ingredients': '',
      'creator': 'date-limite-app',
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'ingredients_text_with_allergens_de': null,
      'code': '90088513',
      'product_name': 'Riemenschneider Kräuter',
      'countries_debug_tags': [],
      'nutriments': {},
      'last_editor': 'date-limite-app',
      'languages_codes': {
        'de': 1
      },
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'minerals_tags': [],
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:FR, en:de',
      'product_name_de': 'Riemenschneider Kräuter',
      'ingredients_tags': [],
      'sortkey': 538208588,
      'quantity': '90 g',
      'additives_prev_original_tags': [],
      'informers_tags': [
        'date-limite-app'
      ],
      'complete': 0,
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'nutrient_levels_tags': [],
      'ingredients_hierarchy': [],
      'additives_original_tags': [],
      'last_modified_by': 'date-limite-app',
      'packaging': 'Stück',
      'product_name_debug_tags': [],
      'ingredients_ids_debug': [],
      'nucleotides_prev_tags': [],
      'quality_tags': [],
      'additives_prev_tags': [],
      'traces_from_ingredients': '',
      'lang': 'de',
      'last_modified_t': 1538208588,
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'checkers_tags': [],
      'vitamins_prev_tags': [],
      'serving_quantity': 0
    },
    {
      '_id': '9006548353104',
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'vitamins_prev_tags': [],
      'checkers_tags': [],
      'serving_quantity': 0,
      'additives_prev_tags': [],
      'traces_from_ingredients': '',
      'last_modified_t': 1538208535,
      'lang': 'de',
      'packaging': 'Stück',
      'product_name_debug_tags': [],
      'ingredients_ids_debug': [],
      'quality_tags': [],
      'nucleotides_prev_tags': [],
      'nutrient_levels_tags': [],
      'last_modified_by': 'date-limite-app',
      'additives_original_tags': [],
      'ingredients_hierarchy': [],
      'quantity': '200 g',
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'informers_tags': [
        'date-limite-app'
      ],
      'additives_prev_original_tags': [],
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'complete': 0,
      'product_name_de': 'Schärdinger Landfrischkäse',
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'minerals_tags': [],
      'ingredients_text_debug': null,
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:FR, en:de',
      'ingredients_tags': [],
      'sortkey': 538208535,
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'languages_codes': {
        'de': 1
      },
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'countries_debug_tags': [],
      'nutriments': {},
      'last_editor': 'date-limite-app',
      'code': '9006548353104',
      'product_name': 'Schärdinger Landfrischkäse',
      'nutrition_data_per': '100g',
      'allergens_from_ingredients': '',
      'creator': 'date-limite-app',
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'ingredients_text_with_allergens_de': null,
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nova_group_tags': [
        'not-applicable'
      ],
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'rev': 1,
      'lc': 'de',
      'nucleotides_tags': [],
      'vitamins_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'ingredients_debug': [],
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538208535,
      'interface_version_created': '20150316.jqm2',
      'allergens_tags': [],
      'product_quantity': 200,
      'quantity_debug_tags': [],
      'unknown_nutrients_tags': [],
      'correctors_tags': [],
      'traces_hierarchy': [],
      'id': '9006548353104',
      'additives_tags': [],
      'ingredients': [],
      'editors_tags': [
        'date-limite-app'
      ],
      'additives_debug_tags': [],
      'allergens_hierarchy': [],
      'traces_tags': [],
      'codes_tags': [
        'code-13',
        9006548353104,
        '900654835310x',
        '90065483531xx',
        '9006548353xxx',
        '900654835xxxx',
        '90065483xxxxx',
        '9006548xxxxxx',
        '900654xxxxxxx',
        '90065xxxxxxxx',
        '9006xxxxxxxxx',
        '900xxxxxxxxxx',
        '90xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'minerals_prev_tags': [],
      'unknown_ingredients_n': 0,
      'photographers_tags': [],
      'ingredients_from_palm_oil_tags': [],
      'nutrient_levels': {},
      '_keywords': [
        'landfrischkase',
        'schardinger'
      ],
      'product_name_de_debug_tags': [],
      'ingredients_text_with_allergens': null,
      'packaging_tags': [
        'stuck'
      ],
      'languages': {
        'en:german': 1
      }
    },
    {
      '_id': '9120070960019',
      'nutrient_levels_tags': [],
      'ingredients_hierarchy': [],
      'additives_original_tags': [],
      'last_modified_by': 'date-limite-app',
      'packaging': 'Flasche',
      'ingredients_ids_debug': [],
      'product_name_debug_tags': [],
      'nucleotides_prev_tags': [],
      'quality_tags': [],
      'additives_prev_tags': [],
      'traces_from_ingredients': '',
      'lang': 'de',
      'last_modified_t': 1538208301,
      'entry_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'additives_old_tags': [],
      'checkers_tags': [],
      'vitamins_prev_tags': [],
      'serving_quantity': 0,
      'code': '9120070960019',
      'product_name': 'San Lucar Clementinensaft',
      'countries_debug_tags': [],
      'nutriments': {},
      'last_editor': 'date-limite-app',
      'languages_codes': {
        'de': 1
      },
      'last_edit_dates_tags': [
        '2018-09-29',
        '2018-09',
        '2018'
      ],
      'ingredients_that_may_be_from_palm_oil_tags': [],
      'ingredients_original_tags': [],
      'nutrition_data_prepared_per': '100g',
      'amino_acids_tags': [],
      'nutrition_grades_tags': [
        'not-applicable'
      ],
      'countries_tags': [
        'en:france',
        'en:germany'
      ],
      'minerals_tags': [],
      'misc_tags': [
        'en:nutriscore-not-computed'
      ],
      'countries': 'en:FR, en:de',
      'ingredients_text_debug': null,
      'product_name_de': 'San Lucar Clementinensaft',
      'ingredients_tags': [],
      'sortkey': 538208301,
      'quantity': '250 ml',
      'additives_prev_original_tags': [],
      'informers_tags': [
        'date-limite-app'
      ],
      'states_tags': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'complete': 0,
      'countries_hierarchy': [
        'en:france',
        'en:germany'
      ],
      'product_quantity': 250,
      'quantity_debug_tags': [],
      'languages_tags': [
        'en:german',
        'en:1'
      ],
      'languages_hierarchy': [
        'en:german'
      ],
      'amino_acids_prev_tags': [],
      'states_hierarchy': [
        'en:to-be-completed',
        'en:nutrition-facts-to-be-completed',
        'en:ingredients-to-be-completed',
        'en:expiration-date-to-be-completed',
        'en:packaging-code-to-be-completed',
        'en:characteristics-to-be-completed',
        'en:categories-to-be-completed',
        'en:brands-to-be-completed',
        'en:packaging-completed',
        'en:quantity-completed',
        'en:product-name-completed',
        'en:photos-to-be-uploaded'
      ],
      'created_t': 1538208301,
      'vitamins_tags': [],
      'interface_version_modified': '20150316.jqm2',
      'ingredients_debug': [],
      'allergens_tags': [],
      'interface_version_created': '20150316.jqm2',
      'nutrition_score_debug': 'no score when the product does not have a category',
      'nova_group_tags': [
        'not-applicable'
      ],
      'nova_group_debug': 'no nova group when the product does not have ingredients',
      'rev': 1,
      'nucleotides_tags': [],
      'lc': 'de',
      'nutrition_data_per': '100g',
      'allergens_from_ingredients': '',
      'creator': 'date-limite-app',
      'no_nutrition_data': '',
      'packaging_debug_tags': [],
      // tslint:disable-next-line:max-line-length
      'states': 'en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-uploaded',
      'ingredients_text_with_allergens_de': null,
      'languages': {
        'en:german': 1
      },
      'ingredients_from_palm_oil_tags': [],
      'photographers_tags': [],
      'packaging_tags': [
        'flasche'
      ],
      '_keywords': [
        'san',
        'lucar',
        'clementinensaft'
      ],
      'nutrient_levels': {},
      'product_name_de_debug_tags': [],
      'ingredients_text_with_allergens': null,
      'allergens_hierarchy': [],
      'editors_tags': [
        'date-limite-app'
      ],
      'additives_debug_tags': [],
      'unknown_ingredients_n': 0,
      'traces_tags': [],
      'codes_tags': [
        'code-13',
        9120070960019,
        '912007096001x',
        '91200709600xx',
        '9120070960xxx',
        '912007096xxxx',
        '91200709xxxxx',
        '9120070xxxxxx',
        '912007xxxxxxx',
        '91200xxxxxxxx',
        '9120xxxxxxxxx',
        '912xxxxxxxxxx',
        '91xxxxxxxxxxx',
        '9xxxxxxxxxxxx'
      ],
      'minerals_prev_tags': [],
      'traces_hierarchy': [],
      'unknown_nutrients_tags': [],
      'correctors_tags': [],
      'ingredients': [],
      'id': '9120070960019',
      'additives_tags': []
    },
  ];

  }


}
