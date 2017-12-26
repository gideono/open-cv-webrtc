import path from "path";
import { equal } from "assert";
import { detect } from "../service/detection";
import { imread } from "opencv4nodejs";


describe('detection', function() {
    describe('simple face detection with front face alt 2 classification', function() {
        it('should detect 4 faces', function() {
            const expected = 4;
            const img = imread(path.join(__dirname, '../resources/img/got.jpg'));
            const { objects: actual } = detect()(img);
            equal(expected, actual.length);
        });
    });
});