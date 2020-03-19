﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200319101445_SeedData")]
    partial class SeedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2");

            modelBuilder.Entity("Domain.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("values");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Value 1"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Value 2"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Value 3"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Value 4"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
