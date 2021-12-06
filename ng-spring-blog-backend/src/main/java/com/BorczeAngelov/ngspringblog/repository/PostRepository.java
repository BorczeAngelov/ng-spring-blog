package com.BorczeAngelov.ngspringblog.repository;

import com.BorczeAngelov.ngspringblog.model.Post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}