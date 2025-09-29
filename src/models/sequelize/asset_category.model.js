import { DataTypes } from "sequelize";
import { AssetModel } from "./asset.model";
import { CategoryModel } from "./category.model";

export const AssetCategoryModel = sequelize.define("AssetCategory", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

// TODO: completar relaciones muchos a muchos entre Asset y Category mediante AssetCategory.
// * N:M Asset ↔ Category through AssetCategory
// * 'categories' (Asset) y 'assets' (Category)
// ! FALTA COMPLETAR ACA

AssetModel.hasMany(CategoryModel, {trough: AssetCategoryModel, foreingKey: "category_id", as: "category" })
CategoryModel.belongsToMany(AssetModel, {trough: AssetCategoryModel, foreingKey: "asset_id", as: "assets"})