const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255, require: true },
    des: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    videoId: { type: String },
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', Course, 'Courses');