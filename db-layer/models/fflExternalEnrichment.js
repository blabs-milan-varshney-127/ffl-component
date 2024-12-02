const { DataTypes, Model, STRING } = require("sequelize");
 
class FFLExternalEnrichment extends Model {
  static async createModel(pool) {
    return FFLExternalEnrichment.init(
      {
        record_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        sigsauer: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        gunbroker: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        budsgunshop: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        gunstores: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        rockriverarms: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        impactguns: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        sportsmansguide: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        midwayusa: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        grabagun: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        brownells: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        omahaoutdoors: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        palmettostatearmory: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        browning: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        "smith-wesson": {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        ffl123: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        goexposoftware: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        sportsmans: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        "guns.com": {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        class3: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        preferred: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        gunb_licenseonfile: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        impa_licenseonfile: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        omah_licenseonfile: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        palm_licenseonfile: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        ambassador: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        guardian: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        range: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        gunsmith: {
          type: DataTypes.STRING,
          allowNull: true,
          values: ["Yes", "No"],
        },
        id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        company: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        fax: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        website: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        facebook: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        twitter: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        street: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        zipcode: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        country: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        latitude: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        longitude: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        licensenumber: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        expiredate: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gunb_fee_handgun: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        spgd_fee_handgun: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        midw_fee_handgun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        brow_fee_handgun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        gunb_fee_long_gun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        spgd_fee_long_gun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        midw_fee_long_gun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        brow_fee_long_gun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        brow_fee_outofstate: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        gunb_fee_other: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        gunb_fee_nics: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        impa_fee_transfer: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        "guns.com_fee_transfer": {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_handgun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_long_gun: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_outofstate: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_other: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_nics: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        merged_transfer: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        spms_ct1_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        spms_ct1_job_title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        spms_ct1_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        shot_ct1_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        shot_ct1_job_title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        shot_ct1_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        shot_ct1_phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct1_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct1_job_title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct1_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct1_phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct2_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct2_job_title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct2_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct2_phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct3_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct3_job_title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct3_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        gnst_ct3_phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        tags: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat1: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat2: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat3: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat4: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat5: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat6: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat7: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat8: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat9: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        cat10: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        license_key:{
            type: DataTypes.STRING,
            allowNull: true
        },
        is_processed: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        matched_license_key:{
          type: DataTypes.ARRAY(STRING),
          allowNull: true
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_external_enrichment",
      }
    );
  }
}
 
module.exports = FFLExternalEnrichment;
 