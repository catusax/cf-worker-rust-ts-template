//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

use std::assert_eq;

use wasm_bindgen_test::*;
use wasm_worker::hello;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}

#[wasm_bindgen_test]
async fn testhello() {
    let res = hello(String::from("world")).await.unwrap();
    assert_eq!(res,String::from("helloworld"));
}