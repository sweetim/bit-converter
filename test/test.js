'use strict';

const assert = require('assert');

const Convert = require('../index');

describe('Convert', () => {
    describe('#toByte', () => {
        it('should return -1', () => {
            assert.equal(-1, Convert.toByte([0xFF]));
        });

        it('should return 1', () => {
            assert.equal(1, Convert.toByte([0x01]));
        });

        it('should return 0', () => {
            assert.equal(0, Convert.toByte([0]));
        });
    });

    describe('#toShort', () => {
        it('should return -1', () => {
            assert.equal(-1, Convert.toShort([0xFF, 0xFF]));
        });

        it('should return 1', () => {
            assert.equal(1, Convert.toShort([0x00, 0x01]));
        });

        it('should return 0', () => {
            assert.equal(0, Convert.toShort([0, 0]));
        });
    });

    describe('#toInt', () => {
        it('should return -1', () => {
            assert.equal(-1, Convert.toInt([0xFF, 0xFF, 0xFF, 0xFF]));
        });

        it('should return 1', () => {
            assert.equal(1, Convert.toInt([0x00, 0x00, 0x00, 0x01]));
        });

        it('should return 0', () => {
            assert.equal(0, Convert.toInt([0, 0, 0, 0]));
        });
    });
});
