exports.up = function(knex, Promise) {
  return knex.schema.createTable("show", table => {
    table.increments("id");
    table.varchar("title");
    table.varchar("date");
    table.varchar("tv_source");
    table.text("cover_image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("show");
};
